import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLubPage } from './list-lub.page';

describe('ListLubPage', () => {
  let component: ListLubPage;
  let fixture: ComponentFixture<ListLubPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLubPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLubPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
