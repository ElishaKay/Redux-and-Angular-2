/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PlaceOrderActions3Component } from './place-order-actions-3.component';

describe('PlaceOrderActions3Component', () => {
  let component: PlaceOrderActions3Component;
  let fixture: ComponentFixture<PlaceOrderActions3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceOrderActions3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceOrderActions3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
