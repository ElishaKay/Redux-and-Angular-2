import { Component, OnDestroy } from '@angular/core';
import { NgRedux } from 'ng2-redux';

@Component({
  selector: 'app-profile-container',
  template: `
    <app-profile
      [name]="name"
      [handle]="handle"
      [headerPhotoURL]="headerPhotoURL"
      [profilePhotoURL]="profilePhotoURL"
      [posts]="posts"
      [likes]="likes"
      [reposts]="reposts"
      ></app-profile>
  `,
})
export class ProfileContainerComponent implements OnDestroy {
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
      handle: state.user.handle,
      headerPhotoURL: state.user.headerPhotoURL,
      profilePhotoURL: state.user.profilePhotoURL,

      posts: state.posts.filter(post => post.handle === state.user.handle).length,
      likes: state.posts.filter(post => post.liked).length,
      reposts: state.posts.filter(post => post.reposted).length,
    };
  }
}
