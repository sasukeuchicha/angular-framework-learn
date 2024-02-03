import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncapsulationExampleComponent } from './encapsulation-example.component';

describe('EncapsulationExampleComponent', () => {
  let component: EncapsulationExampleComponent;
  let fixture: ComponentFixture<EncapsulationExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EncapsulationExampleComponent]
    });
    fixture = TestBed.createComponent(EncapsulationExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
