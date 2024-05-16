import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {BuyTicketTransportComponent} from "./component/buy-ticket-transport/buy-ticket-transport.component";
import {CoinMetricsComponent} from "./component/coin-metrics/coin-metrics.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'tickets',
    component: BuyTicketTransportComponent,
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'coins',
    component: CoinMetricsComponent,
    runGuardsAndResolvers: 'always'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
