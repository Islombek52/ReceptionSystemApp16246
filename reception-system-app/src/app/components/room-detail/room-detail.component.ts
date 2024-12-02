// src/app/room-detail/room-detail.component.ts
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';  // <-- Import necessary modules
import { HttpClientModule } from '@angular/common/http';  // <-- Import HttpClient module for API requests
import { RoomService } from '../../services/room.service';  // <-- Import the service

@Component({
  selector: 'app-room-detail',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],  // <-- Add ReactiveFormsModule and HttpClientModule
  templateUrl: '../room-detail/room-detail.component.html',
  styleUrls: ['../room-detail/room-detail.component.css']
})
export class RoomDetailComponent {
  roomForm: FormGroup;

  private fb = inject(FormBuilder);  // <-- Inject the FormBuilder service
  private roomService = inject(RoomService);  // <-- Inject the RoomService for API calls

  constructor() {
    // Initialize the form with form controls and validators
    this.roomForm = this.fb.group({
      roomNumber: ['', [Validators.required]],
      type: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]]
    });
  }

  // Method to submit the form data
  onSubmit(): void {
    if (this.roomForm.valid) {
      this.roomService.addRoom(this.roomForm.value).subscribe(
        (response) => {
          console.log('Room added successfully', response);
        },
        (error) => {
          console.error('Error adding room', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}
