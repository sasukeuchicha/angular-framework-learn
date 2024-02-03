import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingAssessmentComponent } from './binding-assessment.component';

describe('BindingAssessmentComponent', () => {
  let component: BindingAssessmentComponent;
  let fixture: ComponentFixture<BindingAssessmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BindingAssessmentComponent]
    });
    fixture = TestBed.createComponent(BindingAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
