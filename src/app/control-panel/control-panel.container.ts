import { Component, Input, OnDestroy } from '@angular/core';
import { NgRedux } from 'ng2-redux';

import { profilePhotoURL } from '../twitter/profile-photo-url';
import { USER_SET_NAME, USER_SET_HANDLE, USER_SET_PROFILE_PHOTO_URL } from '../twitter/twitter.action-types';

@Component({
  selector: 'app-control-panel-container',
  template: `
    <app-control-panel
      [name]="name"
      [handle]="handle"
      [profilePhotoURLs]="profilePhotoURLs"
      [useRedux]="useRedux"
      (nameChange)="handleNameChange($event)"
      (handleChange)="handleHandleChange($event)"
      (profilePhotoURLChange)="handleProfilePhotoURLChange($event)"
      ></app-control-panel>
  `,
})
export class ControlPanelContainerComponent implements OnDestroy {
  private disconnect: Function;
  private profilePhotoURLs: string[] = [
    profilePhotoURL(),
    profilePhotoURL(),
    profilePhotoURL(),
    profilePhotoURL(),
    profilePhotoURL(),
    profilePhotoURL(),
    profilePhotoURL(),
    profilePhotoURL(),
  ];
  @Input() private useRedux: boolean = false;

  constructor(
    private ngRedux: NgRedux<IAppState>
  ) {
    this.disconnect = ngRedux.connect(this.mapStateToProps, this.mapDispatchToProps)(this);
  }

  ngOnDestroy() {
    this.disconnect();
  }

  private mapStateToProps(state: IAppState) {
    return {
      name: state.user.name,
      handle: state.user.handle,
    };
  }

  private mapDispatchToProps(dispatch) {
    return {
      handleNameChange: (value: string) => dispatch({ type: USER_SET_NAME, value }),
      handleHandleChange: (value: string) => dispatch({ type: USER_SET_HANDLE, value }),
      handleProfilePhotoURLChange: (value: string) => dispatch({ type: USER_SET_PROFILE_PHOTO_URL, value }),
    };
  }
}
