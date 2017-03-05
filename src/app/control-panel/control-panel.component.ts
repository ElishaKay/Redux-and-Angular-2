import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent {
  // tslint:disable:no-unused-variable
  @Input() private name: string;
  @Input() private handle: string;
  @Input() private profilePhotoURLs: string[];
  @Input() private useRedux: boolean;
  // tslint:enable:no-unused-variable

  @Output() private nameChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() private handleChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() private profilePhotoURLChange: EventEmitter<string> = new EventEmitter<string>();

  // tslint:disable-next-line:no-unused-variable
  private handleNameChange(name: string) {
    this.nameChange.emit(name);
  }

  // tslint:disable-next-line:no-unused-variable
  private handleHandleChange(name: string) {
    this.handleChange.emit(name);
  }

  // tslint:disable-next-line:no-unused-variable
  private handleProfilePhotoClick(url: string) {
    this.profilePhotoURLChange.emit(url);
  }
}
