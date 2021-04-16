import { Component, ViewChild, OnInit, AfterViewChecked, ElementRef } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewChecked {

  resources = [];
  externalEvents = []; 
  events = [];
  options = {
    defaultView: 'agendaDay',
    defaultDate: '2018-07-26',
    // minTime: '08:00:00',
    // maxTime: '18:00:00',
    // slotDuration: '00:15:00',
    editable: true,
    droppable: true,
    slotEventOverlap: false
    // header: {
    //   left: '',
    //   center: '',
    //   right: ''
    // }
  };

  constructor() {
  }

  ngOnInit() {
    this.resources = [
      {
        id: '1',
        title: ''
      }
    ];

    this.events = [
      {
        'title': 'Test Event',
        'start': '2018-07-26T10:00:00'
      }
    ];

    this.externalEvents = [
      {
        'title': 'Some Event',
        'duration': '01:00:00',
        'background': true
      }
    ];
  }

  ngAfterViewChecked() {
  }

  getEvent(event) {
    return JSON.stringify(event);
  }

}
