declare type CoinSwapInfo = {
  chargeCode: string,
  coins: Array<string>,
  sendAddresses: { [string]: string},
  sendAmounts: { [string]: number },
  lbcAmount: number,
  status?: {
    status: string,
    receipt_txid: string,
    lbc_txid: string,
  },
}

declare type CoinSwapState = {
  coinSwaps: Array<CoinSwapInfo>,
};

declare type CoinSwapAddAction = {
  type: string,
  data: CoinSwapInfo,
};

declare type CoinSwapRemoveAction = {
  type: string,
  data: {
    chargeCode: string,
  },
};
