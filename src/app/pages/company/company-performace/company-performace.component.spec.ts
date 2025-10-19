import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyPerformaceComponent } from './company-performace.component';

describe('CompanyPerformaceComponent', () => {
  let component: CompanyPerformaceComponent;
  let fixture: ComponentFixture<CompanyPerformaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyPerformaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyPerformaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
