import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildExample1Component } from './child-example1.component';

describe('ChildExample1Component', () => {
  let component: ChildExample1Component;
  let fixture: ComponentFixture<ChildExample1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildExample1Component]
    });
    fixture = TestBed.createComponent(ChildExample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
