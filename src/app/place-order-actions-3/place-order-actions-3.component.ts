import { Component, OnDestroy } from '@angular/core';
import { NgRedux } from 'ng2-redux';

@Component({
  selector: 'app-place-order-actions-3',
  templateUrl: './place-order-actions-3.component.html',
  styleUrls: ['./place-order-actions-3.component.css']
})
export class PlaceOrderActions3Component implements OnDestroy {
  private disconnect: Function;

  constructor(
    private ngRedux: NgRedux<any>
  ) {
    this.disconnect = ngRedux.connect(this.mapStateToProps, this.mapDispatchToProps)(this);
  }

  ngOnDestroy() {
    this.disconnect();
  }

  private mapStateToProps(state: any) {
    const { runningTotal } = state;

    return {
      runningTotal,
    };
  }

  private mapDispatchToProps(dispatch) {
    return {
      handlePlaceOrderButtonClicked: function(orderTotal: number) {
        dispatch({ type: 'PLACE_ORDER', orderTotal });
      },
    };
  }
}
