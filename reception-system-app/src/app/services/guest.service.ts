import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Guest } from '../models/guest.model';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  private apiUrl = `${environment.apiBaseUrl}/api/Guests`;

  constructor(private http: HttpClient) { }

  // Get all guests
  getGuests(): Observable<Guest[]> {
    return this.http.get<Guest[]>(this.apiUrl);
  }

  // Get a single guest by ID
  getGuest(id: number): Observable<Guest> {
    return this.http.get<Guest>(`${this.apiUrl}/${id}`);
  }

  // Create a new guest
  addGuest(guest: Guest): Observable<Guest> {
    return this.http.post<Guest>(this.apiUrl, guest);
  }

  // Update an existing guest
  updateGuest(id: number, guest: Guest): Observable<Guest> {
    return this.http.put<Guest>(`${this.apiUrl}/${id}`, guest);
  }

  // Delete a guest
  deleteGuest(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
