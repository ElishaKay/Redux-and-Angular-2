/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PlaceOrderActions2Component } from './place-order-actions-2.component';

describe('PlaceOrderActions2Component', () => {
  let component: PlaceOrderActions2Component;
  let fixture: ComponentFixture<PlaceOrderActions2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceOrderActions2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceOrderActions2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
