// @flow
declare type StatusResponse = {
  blob_manager: {
    finished_blobs: number,
  },
  blockchain_headers: {
    download_progress: number,
    downloading_headers: boolean,
  },
  connection_status: {
    code: string,
    message: string,
  },
  dht: {
    node_id: string,
    peers_in_routing_table: number,
  },
  hash_announcer: {
    announce_queue_size: number,
  },
  installation_id: string,
  is_running: boolean,
  skipped_components: Array<string>,
  startup_status: {
    blob_manager: boolean,
    blockchain_headers: boolean,
    database: boolean,
    dht: boolean,
    exchange_rate_manager: boolean,
    hash_announcer: boolean,
    peer_protocol_server: boolean,
    stream_manager: boolean,
    upnp: boolean,
    wallet: boolean,
  },
  stream_manager: {
    managed_files: number,
  },
  upnp: {
    aioupnp_version: string,
    dht_redirect_set: boolean,
    external_ip: string,
    gateway: string,
    peer_redirect_set: boolean,
    redirects: {},
  },
  wallet: ?{
    best_blockhash: string,
    blocks: number,
    blocks_behind: number,
    is_encrypted: boolean,
    is_locked: boolean,
  },
};

declare type VersionResponse = {
  build: string,
  lbrynet_version: string,
  os_release: string,
  os_system: string,
  platform: string,
  processor: string,
  python_version: string,
};

declare type BalanceResponse = {
  available: string,
  reserved: string,
  reserved_subtotals: ?{
    claims: string,
    supports: string,
    tips: string,
  },
  total: string,
};

declare type ResolveResponse = {
  // Keys are the url(s) passed to resolve
  [string]: { error?: {}, stream?: StreamClaim, channel?: ChannelClaim, claimsInChannel?: number },
};

declare type GetResponse = FileListItem & { error?: string };

declare type GenericTxResponse = {
  height: number,
  hex: string,
  inputs: Array<{}>,
  outputs: Array<{}>,
  total_fee: string,
  total_input: string,
  total_output: string,
  txid: string,
};

declare type PublishResponse = GenericTxResponse & {
  // Only first value in outputs is a claim
  // That's the only value we care about
  outputs: Array<Claim>,
};

declare type ClaimSearchResponse = {
  items: Array<Claim>,
  page: number,
  page_size: number,
  total_items: number,
  total_pages: number,
};

declare type ClaimListResponse = {
  items: Array<ChannelClaim | Claim>,
};

declare type ChannelCreateResponse = GenericTxResponse & {
  outputs: Array<ChannelClaim>,
};

declare type ChannelUpdateResponse = GenericTxResponse & {
  outputs: Array<ChannelClaim>,
};

declare type CommentCreateResponse = Comment;
declare type CommentListResponse = Array<Comment>;

declare type ChannelListResponse = Array<ChannelClaim>;

declare type FileListResponse = Array<FileListItem>;

declare type TxListResponse = { items: Array<Transaction> };

declare type BlobListResponse = Array<string>;

declare type WalletListResponse = Array<{
  id: string,
  name: string,
}>;

declare type WalletStatusResponse = {
  is_encrypted: boolean,
  is_locked: boolean,
};

declare type SyncApplyResponse = {
  hash: string,
  data: string,
};

declare type SupportAbandonResponse = GenericTxResponse;

declare type StreamListResponse = { items: Array<StreamClaim> };

//
// Types used in the generic Lbry object that is exported
//
declare type LbryTypes = {
  isConnected: boolean,
  connectPromise: ?Promise<any>,
  connect: () => void,
  daemonConnectionString: string,
  apiRequestHeaders: { [key: string]: string },
  setDaemonConnectionString: string => void,
  setApiHeader: (string, string) => void,
  unsetApiHeader: string => void,
  overrides: { [string]: ?Function },
  setOverride: (string, Function) => void,
  getMediaType: (string, ?string) => string,

  // Lbry Methods
  stop: () => Promise<string>,
  status: () => Promise<StatusResponse>,
  version: () => Promise<VersionResponse>,
  resolve: (params: {}) => Promise<ResolveResponse>,
  get: (params: {}) => Promise<GetResponse>,
  publish: (params: {}) => Promise<PublishResponse>,

  claim_search: (params: {}) => Promise<ClaimSearchResponse>,
  claim_list: (params?: {}) => Promise<ClaimListResponse>,
  channel_create: (params: {}) => Promise<ChannelCreateResponse>,
  channel_update: (params: {}) => Promise<ChannelUpdateResponse>,
  channel_import: (params: {}) => Promise<string>,
  channel_list: () => Promise<ChannelListResponse>,
  stream_abandon: (params: {}) => Promise<GenericTxResponse>,
  stream_list: (params: {}) => Promise<StreamListResponse>,
  channel_abandon: (params: {}) => Promise<GenericTxResponse>,
  support_create: (params: {}) => Promise<GenericTxResponse>,

  // File fetching and manipulation
  file_list: (params: {}) => Promise<FileListResponse>,
  file_delete: (params: {}) => Promise<boolean>,
  blob_delete: (params: {}) => Promise<string>,
  blob_list: (params: {}) => Promise<BlobListResponse>,

  // Preferences
  preference_get: (params: {}) => Promise<any>,
  preference_set: (params: {}) => Promise<any>,

  // Commenting
  comment_list: (params: {}) => Promise<CommentListResponse>,
  comment_create: (params: {}) => Promise<CommentCreateResponse>,
  // Wallet utilities
  wallet_balance: (params: {}) => Promise<BalanceResponse>,
  wallet_decrypt: (prams: {}) => Promise<boolean>,
  wallet_encrypt: (params: {}) => Promise<boolean>,
  wallet_unlock: (params: {}) => Promise<boolean>,
  wallet_list: (params: {}) => Promise<WalletListResponse>,
  wallet_send: (params: {}) => Promise<GenericTxResponse>,
  wallet_status: (params: {}) => Promise<WalletStatusResponse>,
  address_is_mine: (params: {}) => Promise<boolean>,
  address_unused: (params: {}) => Promise<string>, // New address
  address_list: (params: {}) => Promise<string>,
  transaction_list: (params: {}) => Promise<TxListResponse>,
  support_abandon: (params: {}) => Promise<SupportAbandonResponse>,

  // Sync
  sync_hash: (params: {}) => Promise<string>,
  sync_apply: (params: {}) => Promise<SyncApplyResponse>,

  // The app shouldn't need to do this
  utxo_release: () => Promise<any>,
};
