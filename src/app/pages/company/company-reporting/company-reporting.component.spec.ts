import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyReportingComponent } from './company-reporting.component';

describe('CompanyReportingComponent', () => {
  let component: CompanyReportingComponent;
  let fixture: ComponentFixture<CompanyReportingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyReportingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyReportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
