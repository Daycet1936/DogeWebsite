export class Exchange {
  id: string;
  name: string;
  rank: number;
  percentTotalVolume: number;
  volumeUsd: number;
  tradingPairs: number;
  socket: string;
  exchangeUrl: string;
  updated: number;

  constructor(id: string, name: string, rank: number, percentTotalVolume: number, volumeUsd: number, tradingPairs: number, socket: string, exchangeUrl: string, updated: number) {
    this.id = id;
    this.name = name;
    this.rank = rank;
    this.percentTotalVolume = percentTotalVolume;
    this.volumeUsd = volumeUsd;
    this.tradingPairs = tradingPairs;
    this.socket = socket;
    this.exchangeUrl = exchangeUrl;
    this.updated = updated;
  }
}
