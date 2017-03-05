import { Component, Input } from '@angular/core';
declare var $;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  // tslint:disable:no-unused-variable
  @Input() private name: string = 'Jesse Pinho';
  @Input() private profilePhotoURL: string =
    'https://pbs.twimg.com/profile_images/378800000310650745/5e38031f42fdbacc2c2041f021460f02.jpeg';
  // tslint:enable:no-unused-variable
}
