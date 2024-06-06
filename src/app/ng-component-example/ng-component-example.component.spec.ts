import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgComponentExampleComponent } from './ng-component-example.component';

describe('NgComponentExampleComponent', () => {
  let component: NgComponentExampleComponent;
  let fixture: ComponentFixture<NgComponentExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgComponentExampleComponent]
    });
    fixture = TestBed.createComponent(NgComponentExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
