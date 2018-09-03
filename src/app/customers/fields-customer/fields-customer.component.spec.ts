import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldsCustomerComponent } from './fields-customer.component';

describe('FieldsCustomerComponent', () => {
  let component: FieldsCustomerComponent;
  let fixture: ComponentFixture<FieldsCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldsCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldsCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
