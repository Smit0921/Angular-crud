import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhopPayoutComponent } from './whop-payout.component';

describe('WhopPayoutComponent', () => {
  let component: WhopPayoutComponent;
  let fixture: ComponentFixture<WhopPayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhopPayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhopPayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
