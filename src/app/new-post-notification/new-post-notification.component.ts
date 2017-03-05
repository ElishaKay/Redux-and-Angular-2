import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-new-post-notification',
  templateUrl: './new-post-notification.component.html',
  styleUrls: ['./new-post-notification.component.scss']
})
export class NewPostNotificationComponent {
  @Input() private count: number;

  get message() {
    const postOrPosts = this.count === 1 ? 'post' : 'posts';
    return `View ${this.count} new ${postOrPosts}`;
  }
}
