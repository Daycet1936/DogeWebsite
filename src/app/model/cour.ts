
export class Cour {
  id: string;
  rank: number;
  symbol: string;
  name: string;
  supply: number;
  maxSupply: number;
  marketCapUsd: number;
  volumeUsd24Hr: number;
  priceUsd: number;
  changePercent24Hr: number;
  vwap24Hr: number;

  constructor(id: string, rank: number, symbol: string, name: string, supply: number, maxSupply: number, marketCapUsd: number, volumeUsd24Hr: number, priceUsd: number, changePercent24Hr: number, vwap24Hr: number) {
    this.id = id;
    this.rank = rank;
    this.symbol = symbol;
    this.name = name;
    this.supply = supply;
    this.maxSupply = maxSupply;
    this.marketCapUsd = marketCapUsd;
    this.volumeUsd24Hr = volumeUsd24Hr;
    this.priceUsd = priceUsd;
    this.changePercent24Hr = changePercent24Hr;
    this.vwap24Hr = vwap24Hr;
  }
}
