import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css'],
})
export class ChildComponentComponent {
  @Input()
  passValueToChild: String = '';

  @Output()
  eventToParent = new EventEmitter<string>();

  onChange($event: any) {
    this.eventToParent.emit($event.target.value);
  }
}
