import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() private post: IPost;
  @Output() private toggleLikePost: EventEmitter<void> = new EventEmitter<void>();
  @Output() private toggleRepost: EventEmitter<void> = new EventEmitter<void>();

  // tslint:disable-next-line:no-unused-variable
  private handleLikeButtonClick() {
    this.toggleLikePost.emit(null);
  }

  // tslint:disable-next-line:no-unused-variable
  private handleRepostButtonClick() {
    this.toggleRepost.emit(null);
  }
}
