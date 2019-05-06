// @flow

declare type ClaimWithPossibleCertificate = {
  certificate?: ChannelClaim,
  claim: StreamClaim,
};

declare type ChannelClaim = GenericClaim & {
  value: ChannelMetadata,
};

declare type StreamClaim = GenericClaim & {
  is_channel_signature_valid?: boolean,
  signing_channel?: {
    claim_id: string,
    name: string,
    value: {
      public_key: string,
    },
  },
  value: StreamMetadata,
};

declare type GenericClaim = {
  address: string, // address associated with tx
  amount: number, // bid amount at time of tx
  claim_id: string, // unique claim identifier
  claim_sequence: number,
  claim_op: 'create' | 'update',
  confirmations: number, // This isn't the most stable atm: https://github.com/lbryio/lbry/issues/2000
  decoded_claim: boolean, // claim made in accordance with sdk protobuf types
  depth: number, // confirmations since tx
  effective_amount: number, // bid amount + supports
  timestamp?: number, // date of transaction
  has_signature: boolean,
  height: number, // block height the tx was confirmed
  hex: string, // `value` hex encoded
  name: string,
  channel_name?: string,
  normalized_name: string, // `name` normalized via unicode NFD spec,
  nout: number, // index number for an output of a tx
  permanent_url: string, // name + claim_id
  supports: Array<{}>, // TODO: add support type once we start using it
  txid: string, // unique tx id
  type: 'claim' | 'update' | 'support',
  valid_at_height?: number, // BUG: this should always exist https://github.com/lbryio/lbry/issues/1728
  value_type: 'stream' | 'channel',
};

declare type GenericMetadata = {
  title?: string,
  description?: string,
  thumbnail?: {
    url?: string,
  },
  languages?: Array<string>,
  tags?: Array<string>,
  locations?: Array<Location>,
};

declare type ChannelMetadata = GenericMetadata & {
  public_key: string,
  cover_url?: string,
  contact_email?: string,
  homepage_url?: string,
  email?: string,
  website_url?: string,
};

declare type StreamMetadata = GenericMetadata & {
  license?: string, // License "title" ex: Creative Commons, Custom copyright
  license_url?: string, // Link to full license
  release_time?: number, // linux timestamp
  author?: string,

  source: {
    sd_hash: string,
    media_type?: string,
    hash?: string,
    name?: string, // file name
    size?: number, // size of file in bytes
  },

  // Only exists if a stream has a fee
  fee?: Fee,

  stream_type: 'video' | 'audio' | 'image' | 'software',
  // Below correspond to `stream_type`
  video?: {
    duration: number,
    height: number,
    width: number,
  },
  audio?: {
    duration: number,
  },
  image?: {
    height: number,
    width: number,
  },
  software?: {
    os: string,
  },
};

declare type Location = {
  latitude?: number,
  longitude?: number,
  country?: string,
  state?: string,
  code?: string,
};

declare type Fee = {
  amount: number, // should be a string https://github.com/lbryio/lbry/issues/1576
  currency: string,
  address: string,
};
