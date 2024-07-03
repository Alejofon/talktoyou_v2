import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Room } from 'src/app/interfaces/room.interface';
import { RoomsService } from 'src/app/services/rooms.service';
import * as microsoftTeams from '@microsoft/teams-js';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.css']
})
export class CallComponent implements OnInit {

  constructor(private route: ActivatedRoute, private roomServis: RoomsService,private sanitizer: DomSanitizer) { }

  roomId: any
  roomSubscrition: Subscription | undefined
  room: Room | undefined
  users: number[] | undefined
  meetingURL?: SafeResourceUrl;

  ngOnInit(): void {
    this.roomId = this.route.snapshot.paramMap.get('id')

    this.roomSubscrition = this.roomServis.getRoomById(this.roomId).subscribe(room => {
      this.room = room
      this.users = room?.id_participants

      console.log(room)

      if (this.room && this.room.busy == room?.capacity) {
        const url = `https://meet.jit.si/room-${this.roomId}`;
        this.meetingURL = this.sanitizer.bypassSecurityTrustResourceUrl(url);
      }

    })

  }

  ngOnDestroy(): void {
    if (this.roomSubscrition) {
      this.roomSubscrition.unsubscribe()

    }
  }

 


}
