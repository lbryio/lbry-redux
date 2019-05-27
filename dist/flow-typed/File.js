// @flow

declare type FileListItem = {
  metadata: StreamMetadata,
  blobs_completed: number,
  blobs_in_stream: number,
  blobs_remaining: number,
  channel_claim_id: string,
  channel_name: string,
  claim_id: string,
  claim_name: string,
  completed: false,
  download_directory: string,
  download_path: string,
  file_name: string,
  key: string,
  mime_type: string,
  nout: number,
  outpoint: string,
  points_paid: number,
  protobuf: string,
  sd_hash: string,
  status: string,
  stopped: false,
  stream_hash: string,
  stream_name: string,
  streaming_url: string,
  suggested_file_name: string,
  total_bytes: number,
  total_bytes_lower_bound: number,
  // TODO: sdk plans to change `tx`
  // It isn't currently used by the apps
  tx: {},
  txid: string,
  written_bytes: number,
};

declare type FileState = {
  failedPurchaseUris: Array<string>,
  purchasedUris: Array<string>,
  purchasedStreamingUrls: {},
};

declare type PurchaseUriCompleted = {
  type: ACTIONS.PURCHASE_URI_COMPLETED,
  data: {
    uri: string,
    streamingUrl: string,
  },
};

declare type PurchaseUriFailed = {
  type: ACTIONS.PURCHASE_URI_FAILED,
  data: {
    uri: string,
    error: any
  },
};

declare type PurchaseUriStarted = {
  type: ACTIONS.PURCHASE_URI_STARTED,
  data: {
    uri: string,
    streamingUrl: string,
  },
};

declare type DeletePurchasedUri = {
  type: ACTIONS.DELETE_PURCHASED_URI,
  data: {
    uri: string
  },
};
