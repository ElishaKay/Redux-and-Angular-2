import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  // tslint:disable:no-unused-variable
  @Input() private name: string = 'Jesse Pinho';
  @Input() private handle: string = 'jessepinho';
  @Input() private headerPhotoURL: string = 'https://pbs.twimg.com/profile_banners/16901789/1398787929/1500x500';
  @Input() private profilePhotoURL: string =
    'https://pbs.twimg.com/profile_images/378800000310650745/5e38031f42fdbacc2c2041f021460f02.jpeg';

  @Input() private posts: number = 0;
  @Input() private likes: number = 0;
  @Input() private reposts: number = 0;
  // tslint:enable:no-unused-variable
}
