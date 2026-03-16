import { CommonModule } from '@angular/common';
import { Component, forwardRef, HostBinding, HostListener, Input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'mf-star-rate',
  imports: [FormsModule,CommonModule],
  templateUrl: './mf-star-rate.component.html',
  styleUrl: './mf-star-rate.component.css',
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting:forwardRef(() =>MfStarRateComponent),
      multi:true
    }

  ]
})
export class MfStarRateComponent implements ControlValueAccessor {
  @Input() maxRating = 5; // Allow customizing the maximum rating
  stars: boolean[] = []; // Array to track filled/empty state of stars

  // --- ControlValueAccessor implementation ---

  // Internal value storage
  private _rating = 0;

  // Flag to track if the component is disabled
  isDisabled = false;

  // Placeholder functions for Angular forms API callbacks
  onChange: (value: number) => void = () => {}; // Called when the value changes
  onTouched: () => void = () => {};           // Called when the component is touched (e.g., blurred)

  // @HostBinding allows binding component properties to host element attributes/classes
  @HostBinding('style.opacity')
  get opacity() {
    return this.isDisabled ? 0.5 : 1; // Visually dim when disabled
  }

  // Called by Angular forms to write a value into the component
  writeValue(value: number): void {
    console.log('writeValue:', value);
    this._rating = value ?? 0; // Handle null/undefined, default to 0
    this.updateStars();
  }

  // Registers the callback function to be called when the component's value changes
  registerOnChange(fn: (value: number) => void): void {
    console.log('registerOnChange called');
    this.onChange = fn;
  }

  // Registers the callback function to be called when the component is considered "touched"
  registerOnTouched(fn: () => void): void {
    console.log('registerOnTouched called');
    this.onTouched = fn;
  }

  // Called by Angular forms when the control's disabled state changes
  setDisabledState?(isDisabled: boolean): void {
    console.log('setDisabledState:', isDisabled);
    this.isDisabled = isDisabled;
  }

  // --- Component Logic ---

  constructor() {
    this.updateStars(); // Initialize stars on component creation
  }

  ngOnInit() {
      this.updateStars(); // Also update in ngOnInit in case maxRating changes early
  }

  // Method called when a star is clicked
  rate(rating: number): void {
    if (!this.isDisabled) {
      console.log('Rating set to:', rating);
      this._rating = rating;
      this.updateStars();
      this.onChange(this._rating); // Notify Angular forms of the change
      this.onTouched();           // Mark the component as touched
    }
  }

  // Update the visual representation of stars based on the current rating
  private updateStars(): void {
    this.stars = Array(this.maxRating).fill(false).map((_, i) => i < this._rating);
    // Example: if _rating is 3 and maxRating is 5, stars will be [true, true, true, false, false]
  }

   // Optional: Handle hover effects for better UX
   @HostListener('mouseleave')
   onMouseLeave() {
     if (!this.isDisabled) {
        this.updateStars(); // Restore actual rating on mouse leave
     }
   }

   previewRating(rating: number): void {
     if (!this.isDisabled) {
       // Temporarily update stars for hover preview
       this.stars = Array(this.maxRating).fill(false).map((_, i) => i < rating);
     }
   }


}
