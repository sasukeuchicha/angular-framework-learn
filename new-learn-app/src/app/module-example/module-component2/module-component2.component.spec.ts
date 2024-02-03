import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleComponent2Component } from './module-component2.component';

describe('ModuleComponent2Component', () => {
  let component: ModuleComponent2Component;
  let fixture: ComponentFixture<ModuleComponent2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModuleComponent2Component]
    });
    fixture = TestBed.createComponent(ModuleComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
