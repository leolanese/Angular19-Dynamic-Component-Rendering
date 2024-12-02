import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicComponent2Component } from './dynamic-component2.component';

describe('DynamicComponent2Component', () => {
  let component: DynamicComponent2Component;
  let fixture: ComponentFixture<DynamicComponent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicComponent2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
