import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCarbPage } from './list-carb.page';

describe('ListCarbPage', () => {
  let component: ListCarbPage;
  let fixture: ComponentFixture<ListCarbPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCarbPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCarbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
