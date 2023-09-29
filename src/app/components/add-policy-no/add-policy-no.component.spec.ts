import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPolicyNoComponent } from './add-policy-no.component';

describe('AddPolicyNoComponent', () => {
  let component: AddPolicyNoComponent;
  let fixture: ComponentFixture<AddPolicyNoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPolicyNoComponent]
    });
    fixture = TestBed.createComponent(AddPolicyNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
