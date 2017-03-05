import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  private counter: number = 0;
  private decrement() { this.counter--; }
  private increment() { this.counter++; }
}
