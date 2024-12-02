// src/app/reservation-detail/reservation-detail.component.ts
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';  // <-- Import necessary modules
import { HttpClientModule } from '@angular/common/http';  // <-- Import HttpClient module for API requests
import { ReservationService } from '../../services/reservation.service';  // <-- Import the service

@Component({
  selector: 'app-reservation-detail',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],  // <-- Add ReactiveFormsModule and HttpClientModule
  templateUrl: '../reservation-detail/reservation-detail.component.html',
  styleUrls: ['../reservation-detail/reservation-detail.component.css']
})
export class ReservationDetailComponent {
  reservationForm: FormGroup;

  private fb = inject(FormBuilder);  // <-- Inject the FormBuilder service
  private reservationService = inject(ReservationService);  // <-- Inject the ReservationService for API calls

  constructor() {
    // Initialize the form with form controls and validators
    this.reservationForm = this.fb.group({
      checkIn: ['', [Validators.required]],
      checkOut: ['', [Validators.required]],
      guestId: ['', [Validators.required]]
    });
  }

  // Method to submit the form data
  onSubmit(): void {
    if (this.reservationForm.valid) {
      this.reservationService.addReservation(this.reservationForm.value).subscribe(
        (response) => {
          console.log('Reservation added successfully', response);
        },
        (error) => {
          console.error('Error adding reservation', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}
