import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-place-order-actions-2',
  templateUrl: './place-order-actions-2.component.html',
  styleUrls: ['./place-order-actions-2.component.css']
})
export class PlaceOrderActions2Component implements OnInit {
  private runningTotal: number;

  ngOnInit() {
    this.runningTotal = this.getRunningTotal(this.runningTotal, { type: '@@INIT' });
  }

  private getRunningTotal(currentRunningTotal = 0, action) {
    if (action.type === 'PLACE_ORDER') {
      return currentRunningTotal + action.orderTotal;
    }
    return currentRunningTotal;
  }

  // tslint:disable-next-line:no-unused-variable
  private handlePlaceOrderButtonClicked(orderTotal: number): void {
    this.runningTotal = this.getRunningTotal(this.runningTotal, {
      type: 'PLACE_ORDER',
      orderTotal: orderTotal,
    });
  }
}
