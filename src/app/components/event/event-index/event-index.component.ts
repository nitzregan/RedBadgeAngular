import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/models/Event';
@Component({
  selector: 'app-event-index',
  templateUrl: './event-index.component.html',
  styleUrls: ['./event-index.component.css']
})
export class EventIndexComponent implements OnInit {

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventService.getEvents().subscribe((events: Event[])=>{

    });
  }

}
