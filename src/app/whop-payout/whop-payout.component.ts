import { Component, Renderer2, ElementRef, ViewChild, inject, Optional } from '@angular/core';
import { WhopLoaderService } from '../whop.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-whop-payout',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './whop-payout.component.html',
  styleUrl: './whop-payout.component.css'
})
export class WhopPayoutComponent {
  @ViewChild('embedHost', { read: ElementRef, static: false }) embedHost!: ElementRef;
  open = false;
  private embedDiv?: HTMLDivElement;

  // replace with your real plan id
  private planId = 'plan_nKHdsIda1Bz24';
  whopLoader = inject(WhopLoaderService)
  constructor(
    private renderer: Renderer2,
    @Optional() private dialogRef: MatDialogRef<WhopPayoutComponent>
  ) {
    // optional: attach global callback to get notified on success
    (window as any).onCheckoutComplete = (planId: string, receiptId: string) => {
      console.log('Whop checkout complete', planId, receiptId);
      this.closeCheckout();
    };
    (window as any).onCheckoutStateChange = (state: any) => {
      console.log('Whop state change', state);
    };
  }

  async openCheckout() {
    this.open = true;
    try {
      await this.whopLoader.load();
    } catch (err) {
      console.error('Failed to load Whop script', err);
      return;
    }

    // if embed already exists, do nothing
    if (this.embedDiv) return;

    // create the data-whop div
    this.embedDiv = this.renderer.createElement('div') as HTMLDivElement;
    this.renderer.setAttribute(this.embedDiv, 'data-whop-checkout-plan-id', this.planId);
    // optional attributes:
    // this.renderer.setAttribute(this.embedDiv, 'data-whop-checkout-theme', 'light');
    // this.renderer.setAttribute(this.embedDiv, 'data-whop-checkout-session', 'ch_XXXX');
    // this.renderer.setAttribute(this.embedDiv, 'data-whop-checkout-hide-price', 'false');
    // attach callback name for on complete
    this.renderer.setAttribute(this.embedDiv, 'data-whop-checkout-on-complete', 'onCheckoutComplete');

    // style not required but helpful
    this.embedDiv.style.width = '100%';
    this.embedDiv.style.minHeight = '500px';

    if (this.embedHost?.nativeElement) {
      this.renderer.appendChild(this.embedHost.nativeElement, this.embedDiv);
    }

    // The loader script will detect data-* attributes and mount the iframe automatically.
  }

  closeCheckout() {
    this.open = false;
    this.dialogRef?.close();
  }
}
