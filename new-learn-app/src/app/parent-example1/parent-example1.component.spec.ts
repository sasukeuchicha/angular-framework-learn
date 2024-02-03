import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentExample1Component } from './parent-example1.component';

describe('ParentExample1Component', () => {
  let component: ParentExample1Component;
  let fixture: ComponentFixture<ParentExample1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentExample1Component]
    });
    fixture = TestBed.createComponent(ParentExample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
