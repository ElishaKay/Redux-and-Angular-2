import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-numbers',
  templateUrl: './add-numbers.component.html',
  styleUrls: ['./add-numbers.component.css']
})
export class AddNumbersComponent implements OnInit {
  private runningTotal: number;

  // tslint:disable-next-line:no-unused-variable
  private codeSample: string = `
const orders = [10, 20, 30];

function addOrderToRunningTotal(currentRunningTotal, order) {
  debugger;
  return currentRunningTotal + order;
}

this.runningTotal = orders.reduce(addOrderToRunningTotal, 0);
  `;

  ngOnInit() {
    const orders = [10, 20, 30];

    function addOrderToRunningTotal(currentRunningTotal, order) {
      debugger; // tslint:disable-line:no-debugger
      return currentRunningTotal + order;
    }

    this.runningTotal = orders.reduce(addOrderToRunningTotal, 0);
  }
}
