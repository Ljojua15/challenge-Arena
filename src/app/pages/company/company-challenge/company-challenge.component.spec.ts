import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyChallengeComponent } from './company-challenge.component';

describe('CompanyChallengeComponent', () => {
  let component: CompanyChallengeComponent;
  let fixture: ComponentFixture<CompanyChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyChallengeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
