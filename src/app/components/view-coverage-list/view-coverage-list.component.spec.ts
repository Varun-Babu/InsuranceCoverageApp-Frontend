import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCoverageListComponent } from './view-coverage-list.component';

describe('ViewCoverageListComponent', () => {
  let component: ViewCoverageListComponent;
  let fixture: ComponentFixture<ViewCoverageListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewCoverageListComponent]
    });
    fixture = TestBed.createComponent(ViewCoverageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
