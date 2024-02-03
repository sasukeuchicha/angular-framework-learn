import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncapsulationExample2Component } from './encapsulation-example2.component';

describe('EncapsulationExample2Component', () => {
  let component: EncapsulationExample2Component;
  let fixture: ComponentFixture<EncapsulationExample2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EncapsulationExample2Component]
    });
    fixture = TestBed.createComponent(EncapsulationExample2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
