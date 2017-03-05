import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-new-post-form',
  templateUrl: './new-post-form.component.html',
  styleUrls: ['./new-post-form.component.css']
})
export class NewPostFormComponent {
  // tslint:disable-next-line:no-unused-variable
  @Input() private profilePhotoURL: string =
    'https://pbs.twimg.com/profile_images/378800000310650745/5e38031f42fdbacc2c2041f021460f02.jpeg';
  @Output() private newPost: EventEmitter<string> = new EventEmitter<string>();

  private text: string = '';

  // tslint:disable-next-line:no-unused-variable
  private handleEnterPress(): void {
    this.newPost.emit(this.text);
    this.text = '';
  }
}
