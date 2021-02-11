// @flow
import { CC_LICENSES, COPYRIGHT, OTHER, NONE, PUBLIC_DOMAIN } from 'constants/licenses';
import { SPEECH_STATUS, SPEECH_PUBLISH } from 'constants/speech_urls';
import * as ACTIONS from 'constants/action_types';
import * as THUMBNAIL_STATUSES from 'constants/thumbnail_upload_statuses';
import Lbry from 'lbry';
import LbryFirst from 'lbry-first';
import { batchActions } from 'util/batch-actions';
import { creditsToString } from 'util/format-credits';
import { doError } from 'redux/actions/notifications';
import { isClaimNsfw } from 'util/claim';
import {
  selectMyChannelClaims,
  selectMyClaimsWithoutChannels,
  selectReflectingById,
} from 'redux/selectors/claims';
import { selectPublishFormValues, selectMyClaimForUri } from 'redux/selectors/publish';

export const doResetThumbnailStatus = () => (dispatch: Dispatch) => {
  dispatch({
    type: ACTIONS.UPDATE_PUBLISH_FORM,
    data: {
      thumbnailPath: '',
    },
  });

  return fetch(SPEECH_STATUS)
    .then(res => res.json())
    .then(status => {
      if (status.disabled) {
        throw Error();
      }

      return dispatch({
        type: ACTIONS.UPDATE_PUBLISH_FORM,
        data: {
          uploadThumbnailStatus: THUMBNAIL_STATUSES.READY,
          thumbnail: '',
        },
      });
    })
    .catch(() =>
      dispatch({
        type: ACTIONS.UPDATE_PUBLISH_FORM,
        data: {
          uploadThumbnailStatus: THUMBNAIL_STATUSES.API_DOWN,
          thumbnail: '',
        },
      })
    );
};

export const doClearPublish = () => (dispatch: Dispatch) => {
  dispatch({ type: ACTIONS.CLEAR_PUBLISH });
  return dispatch(doResetThumbnailStatus());
};

export const doUpdatePublishForm = (publishFormValue: UpdatePublishFormData) => (
  dispatch: Dispatch
) =>
  dispatch({
    type: ACTIONS.UPDATE_PUBLISH_FORM,
    data: { ...publishFormValue },
  });

export const doUploadThumbnail = (
  filePath?: string,
  thumbnailBlob?: File,
  fsAdapter?: any,
  fs?: any,
  path?: any
) => (dispatch: Dispatch) => {
  const downMessage = __('Thumbnail upload service may be down, try again later.');
  let thumbnail, fileExt, fileName, fileType;

  const makeid = () => {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 24; i += 1) text += possible.charAt(Math.floor(Math.random() * 62));
    return text;
  };

  const uploadError = (error = '') => {
    dispatch(
      batchActions(
        {
          type: ACTIONS.UPDATE_PUBLISH_FORM,
          data: {
            uploadThumbnailStatus: THUMBNAIL_STATUSES.READY,
            thumbnail: '',
            nsfw: false,
          },
        },
        doError(error)
      )
    );
  };

  const doUpload = data => {
    return fetch(SPEECH_PUBLISH, {
      method: 'POST',
      body: data,
    })
      .then(res => res.text())
      .then(text => (text.length ? JSON.parse(text) : {}))
      .then(json => {
        return json.success
          ? dispatch({
            type: ACTIONS.UPDATE_PUBLISH_FORM,
            data: {
              uploadThumbnailStatus: THUMBNAIL_STATUSES.COMPLETE,
              thumbnail: json.data.serveUrl,
            },
          })
          : uploadError(json.message || downMessage);
      })
      .catch(err => {
        let message = err.message;

        // This sucks but ¯\_(ツ)_/¯
        if (message === 'Failed to fetch') {
          message = downMessage;
        }

        uploadError(message);
      });
  };

  dispatch({
    type: ACTIONS.UPDATE_PUBLISH_FORM,
    data: { uploadThumbnailStatus: THUMBNAIL_STATUSES.IN_PROGRESS },
  });

  if (fsAdapter && fsAdapter.readFile && filePath) {
    fsAdapter.readFile(filePath, 'base64').then(base64Image => {
      fileExt = 'png';
      fileName = 'thumbnail.png';
      fileType = 'image/png';

      const data = new FormData();
      const name = makeid();
      data.append('name', name);
      // $FlowFixMe
      data.append('file', { uri: 'file://' + filePath, type: fileType, name: fileName });
      return doUpload(data);
    });
  } else {
    if (filePath && fs && path) {
      thumbnail = fs.readFileSync(filePath);
      fileExt = path.extname(filePath);
      fileName = path.basename(filePath);
      fileType = `image/${fileExt.slice(1)}`;
    } else if (thumbnailBlob) {
      fileExt = `.${thumbnailBlob.type && thumbnailBlob.type.split('/')[1]}`;
      fileName = thumbnailBlob.name;
      fileType = thumbnailBlob.type;
    } else {
      return null;
    }

    const data = new FormData();
    const name = makeid();
    const file =
      thumbnailBlob || (thumbnail && new File([thumbnail], fileName, { type: fileType }));
    data.append('name', name);
    // $FlowFixMe
    data.append('file', file);
    return doUpload(data);
  }
};

export const doPrepareEdit = (claim: StreamClaim, uri: string, fileInfo: FileListItem, fs: any) => (
  dispatch: Dispatch
) => {
  const { name, amount, value = {} } = claim;
  const channelName = (claim && claim.signing_channel && claim.signing_channel.name) || null;
  const {
    author,
    description,
    // use same values as default state
    // fee will be undefined for free content
    fee = {
      amount: '0',
      currency: 'LBC',
    },
    languages,
    release_time,
    license,
    license_url: licenseUrl,
    thumbnail,
    title,
    tags,
  } = value;

  const publishData: UpdatePublishFormData = {
    name,
    bid: amount,
    contentIsFree: fee.amount === '0',
    author,
    description,
    fee,
    languages,
    release_time: release_time ? Number(release_time) * 1000 : undefined,
    thumbnail: thumbnail ? thumbnail.url : null,
    title,
    uri,
    uploadThumbnailStatus: thumbnail ? THUMBNAIL_STATUSES.MANUAL : undefined,
    licenseUrl,
    nsfw: isClaimNsfw(claim),
    tags: tags ? tags.map(tag => ({ name: tag })) : [],
  };

  // Make sure custom licenses are mapped properly
  // If the license isn't one of the standard licenses, map the custom license and description/url
  if (!CC_LICENSES.some(({ value }) => value === license)) {
    if (!license || license === NONE || license === PUBLIC_DOMAIN) {
      publishData.licenseType = license;
    } else if (license && !licenseUrl && license !== NONE) {
      publishData.licenseType = COPYRIGHT;
    } else {
      publishData.licenseType = OTHER;
    }

    publishData.otherLicenseDescription = license;
  } else {
    publishData.licenseType = license;
  }
  if (channelName) {
    publishData['channel'] = channelName;
  }

  dispatch({ type: ACTIONS.DO_PREPARE_EDIT, data: publishData });
};

export const doPublish = (success: Function, fail: Function, preview: Function) => (
  dispatch: Dispatch,
  getState: () => {}
) => {
  if (!preview) {
    dispatch({ type: ACTIONS.PUBLISH_START });
  }

  const state = getState();
  const myClaimForUri = selectMyClaimForUri(state);
  const myChannels = selectMyChannelClaims(state);
  const myClaims = selectMyClaimsWithoutChannels(state);
  // get redux publish form
  const publishData = selectPublishFormValues(state);

  // destructure the data values
  const {
    name,
    bid,
    filePath,
    description,
    language,
    release_time,
    license,
    licenseUrl,
    useLBRYUploader,
    licenseType,
    otherLicenseDescription,
    thumbnail,
    channel,
    title,
    contentIsFree,
    fee,
    uri,
    tags,
    locations,
    optimize,
    isLivestreamPublish,
  } = publishData;

  // Handle scenario where we have a claim that has the same name as a channel we are publishing with.
  const myClaimForUriEditing = myClaimForUri && myClaimForUri.name === name ? myClaimForUri : null;

  let publishingLicense;
  switch (licenseType) {
    case COPYRIGHT:
    case OTHER:
      publishingLicense = otherLicenseDescription;
      break;
    default:
      publishingLicense = licenseType;
  }

  // get the claim id from the channel name, we will use that instead
  const namedChannelClaim = myChannels
    ? myChannels.find(myChannel => myChannel.name === channel)
    : null;
  const channelId = namedChannelClaim ? namedChannelClaim.claim_id : '';

  const publishPayload: {
    name: ?string,
    bid: string,
    description?: string,
    channel_id?: string,
    file_path?: string,
    license_url?: string,
    license?: string,
    thumbnail_url?: string,
    release_time?: number,
    fee_currency?: string,
    fee_amount?: string,
    languages?: Array<string>,
    tags: Array<string>,
    locations?: Array<any>,
    blocking: boolean,
    optimize_file?: boolean,
    preview?: boolean,
  } = {
    name,
    title,
    description,
    locations: [],
    bid: creditsToString(bid),
    languages: [language],
    tags: tags && tags.map(tag => tag.name),
    thumbnail_url: thumbnail,
    blocking: true,
    preview: false,
  };
  // Temporary solution to keep the same publish flow with the new tags api
  // Eventually we will allow users to enter their own tags on publish
  // `nsfw` will probably be removed

  if (publishingLicense) {
    publishPayload.license = publishingLicense;
  }

  if (licenseUrl) {
    publishPayload.license_url = licenseUrl;
  }

  if (thumbnail) {
    publishPayload.thumbnail_url = thumbnail;
  }

  if (useLBRYUploader) {
    publishPayload.tags.push('lbry-first');
  }

  // Set release time to curret date. On edits, keep original release/transaction time as release_time
  if (release_time) {
    publishPayload.release_time = Number(Math.round(new Date(release_time) / 1000));
  } else if (myClaimForUriEditing && myClaimForUriEditing.value.release_time) {
    publishPayload.release_time = Number(myClaimForUri.value.release_time);
  } else if (myClaimForUriEditing && myClaimForUriEditing.timestamp) {
    publishPayload.release_time = Number(myClaimForUriEditing.timestamp);
  } else {
    publishPayload.release_time = Number(Math.round(Date.now() / 1000));
  }

  if (channelId) {
    publishPayload.channel_id = channelId;
  }

  if (myClaimForUriEditing && myClaimForUriEditing.value && myClaimForUriEditing.value.locations) {
    publishPayload.locations = myClaimForUriEditing.value.locations;
  }

  if (!contentIsFree && fee && (fee.currency && Number(fee.amount) > 0)) {
    publishPayload.fee_currency = fee.currency;
    publishPayload.fee_amount = creditsToString(fee.amount);
  }

  if (optimize) {
    publishPayload.optimize_file = true;
  }

  // Only pass file on new uploads, not metadata only edits.
  // The sdk will figure it out
  if (filePath) publishPayload.file_path = filePath;

  if (isLivestreamPublish) {
    var d = new Date();

    // Set it to one month in future so it's hidden in apps
    d.setFullYear(d.getFullYear() - 10);
    d.setHours(0, 0, 0);
    d.setMilliseconds(0);

    const releaseTimeInSeconds = d / 1000;

    publishPayload.release_time = releaseTimeInSeconds;

    if (publishPayload.tags) {
      if (!publishPayload.tags.includes('odysee-livestream')) {
        publishPayload.tags.push('odysee-livestream');
      }
    } else {
      publishPayload.tags = ['odysee-livestream'];
    }
  } else if (publishPayload.tags && publishPayload.tags.includes('odysee-livestream')) {
    let newReleaseTime = new Date();
    newReleaseTime.setMilliseconds(0);
    publishPayload.release_time = newReleaseTime / 1000;

    publishPayload.tags = publishPayload.tags.filter(tag => tag !== 'odysee-livestream');
  }

  if (preview) {
    publishPayload.preview = true;
    publishPayload.optimize_file = false;

    return Lbry.publish(publishPayload).then((previewResponse: PublishResponse) => {
      return preview(previewResponse);
    }, fail);
  }

  return Lbry.publish(publishPayload).then((response: PublishResponse) => {
    if (!useLBRYUploader) {
      return success(response);
    }

    // $FlowFixMe
    publishPayload.permanent_url = response.outputs[0].permanent_url;

    return LbryFirst.upload(publishPayload)
      .then(() => {
        // Return original publish response so app treats it like a normal publish
        return success(response);
      })
      .catch(error => {
        return success(response, error);
      });
  }, fail);
};

// Calls file_list until any reflecting files are done
export const doCheckReflectingFiles = () => (dispatch: Dispatch, getState: GetState) => {
  const state = getState();
  const { checkingReflector } = state.claims;
  let reflectorCheckInterval;

  const checkFileList = async() => {
    const state = getState();
    const reflectingById = selectReflectingById(state);
    const ids = Object.keys(reflectingById);

    const newReflectingById = {};
    const promises = [];
    // TODO: just use file_list({claim_id: Array<claimId>})
    if (Object.keys(reflectingById).length) {
      ids.forEach(claimId => {
        promises.push(Lbry.file_list({ claim_id: claimId }));
      });

      Promise.all(promises)
        .then(results => {
          results.forEach(res => {
            if (res.items[0]) {
              const fileListItem = res.items[0];
              const fileClaimId = fileListItem.claim_id;
              const {
                is_fully_reflected: done,
                uploading_to_reflector: uploading,
                reflector_progress: progress,
              } = fileListItem;
              if (uploading) {
                newReflectingById[fileClaimId] = {
                  fileListItem: fileListItem,
                  progress,
                  stalled: !done && !uploading,
                };
              }
            }
          });
        })
        .then(() => {
          dispatch({
            type: ACTIONS.UPDATE_FILES_REFLECTING,
            data: newReflectingById,
          });
          if (!Object.keys(newReflectingById).length) {
            dispatch({
              type: ACTIONS.TOGGLE_CHECKING_REFLECTING,
              data: false,
            });
            clearInterval(reflectorCheckInterval);
          }
        });
    } else {
      dispatch({
        type: ACTIONS.TOGGLE_CHECKING_REFLECTING,
        data: false,
      });
      clearInterval(reflectorCheckInterval);
    }
  };
  // do it once...
  checkFileList();
  // then start the interval if it's not already started
  if (!checkingReflector) {
    dispatch({
      type: ACTIONS.TOGGLE_CHECKING_REFLECTING,
      data: true,
    });
    reflectorCheckInterval = setInterval(() => {
      checkFileList();
    }, 5000);
  }
};
