import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyRewardsComponent } from './company-rewards.component';

describe('CompanyRewardsComponent', () => {
  let component: CompanyRewardsComponent;
  let fixture: ComponentFixture<CompanyRewardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyRewardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyRewardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
