import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyEmployeeNewComponent } from './company-employee-new.component';

describe('CompanyEmployeeNewComponent', () => {
  let component: CompanyEmployeeNewComponent;
  let fixture: ComponentFixture<CompanyEmployeeNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyEmployeeNewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyEmployeeNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
