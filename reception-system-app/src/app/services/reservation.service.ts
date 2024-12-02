import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Reservation } from '../models/Reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private apiUrl = `${environment.apiBaseUrl}/api/Reservations`;

  constructor(private http: HttpClient) { }

  // Get all reservations
  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.apiUrl);
  }

  // Get a single reservation by ID
  getReservation(id: number): Observable<Reservation> {
    return this.http.get<Reservation>(`${this.apiUrl}/${id}`);
  }

  // Create a new guest
  addReservation(guest: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(this.apiUrl, guest);
  }

  // Update an existing guest
  updateReservation(id: number, reservation: Reservation): Observable<Reservation> {
    return this.http.put<Reservation>(`${this.apiUrl}/${id}`, reservation);
  }

  // Delete a guest
  deleteReservation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
