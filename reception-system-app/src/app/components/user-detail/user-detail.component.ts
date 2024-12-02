// src/app/user-detail/user-detail.component.ts
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';  // <-- Import necessary modules
import { HttpClientModule } from '@angular/common/http';  // <-- Import HttpClient module for API requests
import { UserService } from '../../services/user.service';  // <-- Import the service

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],  // <-- Add ReactiveFormsModule and HttpClientModule
  templateUrl: '../user-detail/user-detail.component.html',
  styleUrls: ['../user-detail/user-detail.component.css']
})
export class UserDetailComponent {
  userForm: FormGroup;

  private fb = inject(FormBuilder);  // <-- Inject the FormBuilder service
  private userService = inject(UserService);  // <-- Inject the UserService for API calls

  constructor() {
    // Initialize the form with form controls and validators
    this.userForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // Method to submit the form data
  onSubmit(): void {
    if (this.userForm.valid) {
      this.userService.addUser(this.userForm.value).subscribe(
        (response) => {
          console.log('User added successfully', response);
        },
        (error) => {
          console.error('Error adding user', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}
