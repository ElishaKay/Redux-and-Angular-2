import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MomentModule } from 'angular2-moment';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { ControlPanelContainerComponent } from './control-panel/control-panel.container';
import { CounterComponent } from './counter/counter.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileContainerComponent } from './profile/profile.container';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarContainerComponent } from './navbar/navbar.container';
import { PostComponent } from './post/post.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TimelineContainerComponent } from './timeline/timeline.container';
import { NewPostNotificationComponent } from './new-post-notification/new-post-notification.component';
import { NewPostFormComponent } from './new-post-form/new-post-form.component';
import { HomeComponent } from './home/home.component';
import { AddNumbersComponent } from './add-numbers/add-numbers.component';
import { PlaceOrderActionsComponent } from './place-order-actions/place-order-actions.component';
import { PlaceOrderActions2Component } from './place-order-actions-2/place-order-actions-2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CounterComponent,
    AddNumbersComponent,
    PlaceOrderActionsComponent,
    PlaceOrderActions2Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MomentModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'twitter', loadChildren: 'app/twitter/twitter.module#TwitterModule' },
      { path: 'counter', component: CounterComponent }, // Not used for demo
      { path: 'demo-1', component: AddNumbersComponent },
      { path: 'demo-2', component: PlaceOrderActionsComponent },
      { path: 'demo-3', component: PlaceOrderActions2Component },
      { path: 'demo-4', loadChildren: 'app/place-order-actions-3/place-order-actions-3.module#PlaceOrderActions3Module' },
    ], { useHash: true }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
