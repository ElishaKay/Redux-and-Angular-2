import { Component, OnDestroy } from '@angular/core';
import { NgRedux } from 'ng2-redux';

@Component({
  selector: 'app-navbar-container',
  template: `
    <app-navbar
      [name]="name"
      [profilePhotoURL]="profilePhotoURL"
      ></app-navbar>
  `,
})
export class NavbarContainerComponent {
  private disconnect: Function;

  constructor(private ngRedux: NgRedux<IAppState>) {
    this.disconnect = ngRedux.connect(this.mapStateToProps, null)(this);
  }

  ngOnDestroy() {
    this.disconnect();
  }

  private mapStateToProps(state: IAppState) {
    return {
      name: state.user.name,
      profilePhotoURL: state.user.profilePhotoURL,
    };
  }
}
