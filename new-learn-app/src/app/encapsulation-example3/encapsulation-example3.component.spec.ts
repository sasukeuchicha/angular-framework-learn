import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncapsulationExample3Component } from './encapsulation-example3.component';

describe('EncapsulationExample3Component', () => {
  let component: EncapsulationExample3Component;
  let fixture: ComponentFixture<EncapsulationExample3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EncapsulationExample3Component]
    });
    fixture = TestBed.createComponent(EncapsulationExample3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
