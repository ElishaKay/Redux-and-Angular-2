import {
  animate,
  Component,
  EventEmitter,
  Input,
  Output,
  state,
  style,
  transition,
  trigger,
} from '@angular/core';
import * as uuid from 'uuid';

import { getMockPosts } from './mock-posts';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  animations: [
    trigger('appear', [
      state('visible', style({
        height: '*',
        'border-width': '*',
        'padding-top': '*',
        'padding-bottom': '*',
      })),
      state('hidden', style({
        height: '0',
        'border-width': '0',
        'padding-top': '0',
        'padding-bottom': '0',
      })),
      transition('hidden <=> visible', [
        animate(350),
      ]),
    ])
  ],
})
export class TimelineComponent {
  @Input() private handle: string = 'jessepinho';
  @Input() private name: string = 'Jesse Pinho';
  @Input() private profilePhotoURL: string =
    'https://pbs.twimg.com/profile_images/378800000310650745/5e38031f42fdbacc2c2041f021460f02.jpeg';

  @Input() private posts: IPost[] = getMockPosts();
  @Input() private newPostIds: string[] = this.posts.slice(0, 2).map(post => post.id);

  @Input() private isRedux: boolean = false;

  @Output() private newPost: EventEmitter<IPost> = new EventEmitter<IPost>();
  @Output() private newPostNotificationClick: EventEmitter<void> = new EventEmitter<void>();
  @Output() private toggleLikePost: EventEmitter<IPost> = new EventEmitter<IPost>();
  @Output() private toggleRepost: EventEmitter<IPost> = new EventEmitter<IPost>();

  // tslint:disable-next-line:no-unused-variable
  private handleNewPostNotificationClick() {
    if (this.isRedux) {
      this.newPostNotificationClick.emit(null);
    } else {
      this.newPostIds = [];
    }
  }

  // tslint:disable-next-line:no-unused-variable
  private handleNewPost(text: string): void {
    const id = uuid();
    const newPost = {
      id,
      createdAt: new Date(),
      handle: this.handle,
      name: this.name,
      profilePhotoURL: this.profilePhotoURL,
      text,
    };

    if (this.isRedux) {
      this.newPost.emit(newPost);
    } else {
      this.posts.unshift(newPost);
      this.newPostIds.unshift(id);
    }
  }

  // tslint:disable-next-line:no-unused-variable
  private handleToggleLikePost(post: IPost) {
    if (this.isRedux) {
      this.toggleLikePost.emit(post);
    } else {
      post.liked = !post.liked;
    }
  }

  // tslint:disable-next-line:no-unused-variable
  private handleToggleRepost(post: IPost) {
    if (this.isRedux) {
      this.toggleRepost.emit(post);
    } else {
      post.reposted = !post.reposted;
    }
  }

  // tslint:disable-next-line:no-unused-variable
  private postAnimationState(post: IPost): 'visible' | 'hidden' {
    if (this.newPostIds.indexOf(post.id) !== -1) {
      return 'hidden';
    }
    return 'visible';
  }
}
