import {
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css'],
})
export class PracticeComponent {
  inputValue: String = '';
  fullName: String = '';
  @ViewChildren('passingViewChildren') elements: QueryList<ElementRef>;
  getViewChildren() {
    this.elements.forEach((ele) => {
      //console.log(ele.nativeElement.value);
      this.inputValue += ele.nativeElement.value + ' ';
    });
    this.fullName = this.inputValue.trim();
  }
  // getInputValue: String = '';
  // tempRefInput: String = '';
  // @ViewChild('pssingViewChild', { static: false }) inputElemt: ElementRef;
  // passTheReference() {
  //   this.getInputValue = this.inputElemt.nativeElement.value;
  // }

  // passTempReference(templateRef: HTMLInputElement) {
  //   this.tempRefInput = templateRef.value;
  // }
}
