import {Component, OnInit} from '@angular/core';
import {CoincapService} from "../../services/capcoin.service";
import {Cour} from "../../model/cour";

@Component({
  selector: 'app-buy-ticket-transport',
  templateUrl: './buy-ticket-transport.component.html',
  styleUrls: ['./buy-ticket-transport.component.scss']
})
export class BuyTicketTransportComponent implements OnInit {

  numberTickets = 0;
  ticketPrice = 4;
  reduction = 0.05;
  dogePrice = 0;
  conversion: number = 1;
  cour: Cour | undefined;
  isLoading = true;
  totalPrice = 0;
  reducePrice = 0;
  constructor(
    private coincapService: CoincapService
  ) { }
  ngOnInit(): void {
    this.getCour('dogecoin');
  }

  public buyTickets(): void {
      this.totalPrice = this.numberTickets * this.ticketPrice;
      this.reducePrice = this.totalPrice;

      if (this.numberTickets >= 2) {
        this.reducePrice = this.totalPrice - (this.totalPrice * this.reduction);
      }

      this.dogePrice = this.totalPrice / this.conversion;

      if (this.numberTickets > 1) {
        alert(("You have purchased " + this.numberTickets.toString() + " tickets for a reduced total amount of " + this.reducePrice  + " $\n Is equivalent to " + this.dogePrice.toFixed(2).toString() +" Dogecoins."));
      } else {
        alert(("You have purchased " + this.numberTickets.toString() + " ticket for a total amount of " + this.dogePrice + " $\n Is equivalent to " + this.dogePrice.toFixed(2).toString() +" Dogecoins."));
      }
  }

  private getCour(id: string): void {
    this.coincapService.getCourId(id).subscribe(resp => {
      if (resp.status === 200) {
        this.cour = resp.body['data'];
        if (this.cour?.priceUsd) {
          this.conversion = this.cour.priceUsd;
        }
        this.isLoading = false;
      } else {
        this.isLoading = false;
      }
    });
  }
}
