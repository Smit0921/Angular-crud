import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfStarRateComponent } from './mf-star-rate.component';

describe('MfStarRateComponent', () => {
  let component: MfStarRateComponent;
  let fixture: ComponentFixture<MfStarRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MfStarRateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MfStarRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
