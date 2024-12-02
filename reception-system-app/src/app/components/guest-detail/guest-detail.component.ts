// src/app/guest-detail/guest-detail.component.ts
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';  // <-- Import necessary modules
import { HttpClientModule } from '@angular/common/http';  // <-- Import HttpClient module for API requests
import { GuestService } from '../../services/guest.service';  // <-- Import the service

@Component({
  selector: 'app-guest-detail',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],  // <-- Add ReactiveFormsModule and HttpClientModule
  templateUrl: './guest-detail.component.html',
  styleUrls: ['./guest-detail.component.css']
})
export class GuestDetailComponent {
  guestForm: FormGroup;

  private fb = inject(FormBuilder);  // <-- Inject the FormBuilder service
  private guestService = inject(GuestService);  // <-- Inject the GuestService for API calls

  constructor() {
    // Initialize the form with form controls and validators
    this.guestForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\+?\d{1,4}?\s?\(?\d{1,3}?\)?\s?\d{1,3}?\s?\d{1,3}$/)]]
    });
  }

  // Method to submit the form data
  onSubmit(): void {
    if (this.guestForm.valid) {
      this.guestService.addGuest(this.guestForm.value).subscribe(
        (response) => {
          console.log('Guest added successfully', response);
        },
        (error) => {
          console.error('Error adding guest', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}
