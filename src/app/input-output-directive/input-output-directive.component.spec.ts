import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutputDirectiveComponent } from './input-output-directive.component';

describe('InputOutputDirectiveComponent', () => {
  let component: InputOutputDirectiveComponent;
  let fixture: ComponentFixture<InputOutputDirectiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputOutputDirectiveComponent]
    });
    fixture = TestBed.createComponent(InputOutputDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
