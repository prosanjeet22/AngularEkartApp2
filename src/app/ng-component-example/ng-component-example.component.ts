import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ng-component-example',
  templateUrl: './ng-component-example.component.html',
  styleUrls: ['./ng-component-example.component.css'],
})
export class NgComponentExampleComponent {
  inputType: String = ' ';
  @ViewChild('InputValue') inputValue: ElementRef;
  getInputVlaue() {
    this.inputType = this.inputValue.nativeElement.value;
    console.log(this.inputType);
  }
}
