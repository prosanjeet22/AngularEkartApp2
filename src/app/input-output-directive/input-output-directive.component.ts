import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-input-output-directive',
  templateUrl: './input-output-directive.component.html',
  styleUrls: ['./input-output-directive.component.css'],
})
export class InputOutputDirectiveComponent {
  searchText: String = '';
  searchTextValue1: String = '';
  viewChildDecoreter: String = '';
  //searchTextValue2: String = '';
  @ViewChild('searchTextValue') searchInputEl: ElementRef;
  getSearchTextValue2() {
    this.viewChildDecoreter = this.searchInputEl.nativeElement.value;
  }

  // This method used for the template reference variable
  getSearchTextValue(searchInput: HTMLInputElement) {
    //console.log(searchInput.value);
    this.searchTextValue1 = searchInput.value;
    //console.log($event.target.value);
  }
}
