import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgchildExampleComponent } from './ngchild-example.component';

describe('NgchildExampleComponent', () => {
  let component: NgchildExampleComponent;
  let fixture: ComponentFixture<NgchildExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgchildExampleComponent]
    });
    fixture = TestBed.createComponent(NgchildExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
