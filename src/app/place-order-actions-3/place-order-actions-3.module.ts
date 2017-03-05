import { CommonModule } from '@angular/common';
import { DevToolsExtension, NgRedux, NgReduxModule } from 'ng2-redux';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PlaceOrderActions3Component } from './place-order-actions-3.component';
import { rootReducer } from './running-total.reducer';

@NgModule({
  imports: [
    CommonModule,
    NgReduxModule.forRoot(),
    RouterModule.forChild([
      { path: '', component: PlaceOrderActions3Component },
    ]),
  ],
  declarations: [PlaceOrderActions3Component]
})
export class PlaceOrderActions3Module {
  constructor(
    devToolsExtension: DevToolsExtension,
    ngRedux: NgRedux<any>
  ) {
    const enhancers = [];

    if (devToolsExtension.isEnabled()) {
      enhancers.push(devToolsExtension.enhancer());
    }

    ngRedux.configureStore(rootReducer, {}, [], enhancers);
  }
}
