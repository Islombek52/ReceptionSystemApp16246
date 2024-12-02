import { Component, OnInit } from '@angular/core';
import { GuestService } from '../../services/guest.service';
import { Guest } from 'src/app/models/guest.model';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.css']
})
export class GuestListComponent implements OnInit {

  guests: Guest[] = [];

  constructor(private guestService: GuestService) { }

  ngOnInit(): void {
    this.guestService.getGuests().subscribe(data => {
      this.guests = data;
    });
  }
}
