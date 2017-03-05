import { Component, OnDestroy } from '@angular/core';
import { NgRedux } from 'ng2-redux';

import {
  POST_ADD,
  POST_TOGGLE_LIKE,
  POST_TOGGLE_REPOST,
  POST_CLICK_NEW_POST_NOTIFICATION,
} from '../twitter/twitter.action-types';

@Component({
  selector: 'app-timeline-container',
  template: `
    <app-timeline
      [name]="name"
      [handle]="handle"
      [profilePhotoURL]="profilePhotoURL"

      [newPostIds]="newPostIds"
      [posts]="posts"
      [isRedux]="true"

      (newPost)="handleNewPost($event)"
      (newPostNotificationClick)="handleNewPostNotificationClick()"
      (toggleLikePost)="handleToggleLikePost($event)"
      (toggleRepost)="handleToggleRepost($event)"
      ></app-timeline>
  `,
})
export class TimelineContainerComponent implements OnDestroy {
  private disconnect: Function;

  constructor(private ngRedux: NgRedux<IAppState>) {
    this.disconnect = ngRedux.connect(this.mapStateToProps, this.mapDispatchToProps)(this);
  }

  ngOnDestroy() {
    this.disconnect();
  }

  private mapStateToProps(state) {
    return {
      newPostIds: state.newPostIds,
      posts: state.posts,

      name: state.user.name,
      handle: state.user.handle,
      profilePhotoURL: state.user.profilePhotoURL,
    };
  }

  private mapDispatchToProps(dispatch) {
    return {
      handleNewPost: (post: IPost) => dispatch({ type: POST_ADD, value: post }),
      handleNewPostNotificationClick: () => dispatch({ type: POST_CLICK_NEW_POST_NOTIFICATION }),
      handleToggleLikePost: (post: IPost) => dispatch({ type: POST_TOGGLE_LIKE, value: post }),
      handleToggleRepost: (post: IPost) => dispatch({ type: POST_TOGGLE_REPOST, value: post }),
    };
  }
}
