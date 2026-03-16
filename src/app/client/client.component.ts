
import { Component, inject, Input, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MfStarRateComponent } from '../mf-star-rate/mf-star-rate.component';
import { CommonModule } from '@angular/common';
import { NgLabelTemplateDirective, NgOptionTemplateDirective, NgSelectComponent } from '@ng-select/ng-select';
import { NgOptionComponent } from '@ng-select/ng-select';




@Component({
  selector: 'app-client',
  imports: [FormsModule, ReactiveFormsModule, MfStarRateComponent, CommonModule, NgSelectComponent, NgOptionComponent],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {
  productReviewForm: FormGroup;
    selectedCar: number | undefined;
 cars = [
        { id: 1, name: 'Volvo' },
        { id: 2, name: 'Saab' },
        { id: 3, name: 'Opel' },
        { id: 4, name: 'Audi' },
    ];
  // For Template-Driven Example (optional)

  constructor(private fb: FormBuilder) {
     this.productReviewForm = this.fb.group({
      productName: ['', Validators.required],
      rating: [3, [Validators.required, Validators.min(1)]] // Initial value = 3, required
    });
  }

  ngOnInit() {
    // Example: Listen to value changes
    this.productReviewForm.get('rating')?.valueChanges.subscribe(value => {
    });
  }

  onSubmit() {
    if (this.productReviewForm.valid) {
      console.log('Form Submitted:', this.productReviewForm.value);
      // Send data to backend...
    } else {
      console.log('Form is invalid');
      this.productReviewForm.markAllAsTouched(); // Show validation errors
    }
  }

  setRating(value: number | null) {
    this.productReviewForm.get('rating')?.setValue(value);
  }

  toggleDisable() {
      const ratingControl = this.productReviewForm.get('rating');
      if (ratingControl?.disabled) {
          ratingControl.enable();
      } else {
          ratingControl?.disable();
      }
  }

}


