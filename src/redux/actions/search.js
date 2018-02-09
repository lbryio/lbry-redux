import * as ACTIONS from 'constants/action_types';
import { buildURI } from 'lbryURI';
import { doResolveUri } from 'redux/actions/claims';
import { selectCurrentPage } from 'redux/selectors/navigation';
import batchActions from 'util/batchActions';

// eslint-disable-next-line import/prefer-default-export
export function doSearch(rawQuery, currentPageNotSearchHandler) {
  return (dispatch, getState) => {
    const state = getState();
    const page = selectCurrentPage(state);

    const query = rawQuery.replace(/^lbry:\/\//i, '');

    if (!query) {
      dispatch({
        type: ACTIONS.SEARCH_CANCELLED,
      });
      return;
    }

    dispatch({
      type: ACTIONS.SEARCH_STARTED,
      data: { query },
    });

    if (page !== 'search') {
      if (currentPageNotSearchHandler) {
        currentPageNotSearchHandler();
      }
    } else {
      fetch(`https://lighthouse.lbry.io/search?s=${query}`)
        .then(
          response =>
            response.status === 200
              ? Promise.resolve(response.json())
              : Promise.reject(new Error(response.statusText))
        )
        .then(data => {
          const uris = [];
          const actions = [];

          data.forEach(result => {
            const uri = buildURI({
              name: result.name,
              claimId: result.claimId,
            });
            actions.push(doResolveUri(uri));
            uris.push(uri);
          });

          actions.push({
            type: ACTIONS.SEARCH_COMPLETED,
            data: {
              query,
              uris,
            },
          });
          dispatch(batchActions(...actions));
        })
        .catch(() => {
          dispatch({
            type: ACTIONS.SEARCH_CANCELLED,
          });
        });
    }
  };
}
