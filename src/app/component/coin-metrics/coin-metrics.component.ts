import {Component, OnInit} from '@angular/core';
import {Cour} from "../../model/cour";
import {Exchange} from "../../model/exchange";
import {CoincapService} from "../../services/capcoin.service";

@Component({
  selector: 'app-coin-metrics',
  templateUrl: './coin-metrics.component.html',
  styleUrls: ['./coin-metrics.component.scss']
})
export class CoinMetricsComponent implements OnInit {
  public cours: Cour[] | null = [];
  public isLoadingCour = true;
  public isLoadingExchange = true;
  public exchange: Exchange[] | null = [];
  constructor(
    private coincapService: CoincapService,
  ) { }

  ngOnInit(): void {
    this.synchroCours();
    this.getExchange();
  }

  synchroCours(): void {
    setInterval(() => { this.getCours() }, 5000);
  }

  private getCours(): void {
    this.coincapService.getCours().subscribe(resp => {
      if (resp.status === 200) {
        this.cours = resp.body['data'];
        this.isLoadingCour = false
      } else {
        this.isLoadingCour = false;
      }
    });
  }

  private getExchange(): void {
    this.coincapService.getExchanges().subscribe(resp => {
      if (resp.status === 200) {
        this.exchange = resp.body['data'];
        this.exchange?.sort((a, b) => b.volumeUsd - a.volumeUsd);
        this.isLoadingExchange = false;
      } else {
        this.isLoadingExchange = false;
      }
    });
  }
}
