import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../services/room.service';
import { Room } from 'src/app/models/room.model';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  rooms: Room[] = [];

  constructor(private roomService: RoomService) { }

  ngOnInit(): void {
    this.roomService.getRooms().subscribe(data => {
      this.rooms = data;
    });
  }
}
