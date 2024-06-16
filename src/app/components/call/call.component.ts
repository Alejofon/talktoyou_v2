import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.css']
})
export class CallComponent implements OnInit{

  constructor(private route: ActivatedRoute){}

  roomId?: string | null

  ngOnInit() {
    this.roomId = this.route.snapshot.paramMap.get('id')
  }


}
