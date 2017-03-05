import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-place-order-actions',
  templateUrl: './place-order-actions.component.html',
  styleUrls: ['./place-order-actions.component.css']
})
export class PlaceOrderActionsComponent implements OnInit {
  private runningTotal: number;
  // tslint:disable-next-line:no-unused-variable
  private codeSample: string = `
const actions = [
  { type: 'PLACE_ORDER', orderTotal: 10 },
  { type: 'PLACE_ORDER', orderTotal: 20 },
  { type: 'PLACE_ORDER', orderTotal: 30 },
];

function addOrderToRunningTotal(currentRunningTotal, action) {
  debugger;
  return currentRunningTotal + action.orderTotal;
}

this.runningTotal = actions.reduce(addOrderToRunningTotal, 0);
  `;

  ngOnInit() {
    const actions = [
      { type: 'PLACE_ORDER', orderTotal: 10 },
      { type: 'PLACE_ORDER', orderTotal: 20 },
      { type: 'PLACE_ORDER', orderTotal: 30 },
    ];

    function addOrderToRunningTotal(currentRunningTotal, action) {
      debugger;
      return currentRunningTotal + action.orderTotal;
    }

    this.runningTotal = actions.reduce(addOrderToRunningTotal, 0);
  }
}
