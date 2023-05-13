import {Component, Input, OnInit} from '@angular/core';
import {Ticket} from "./ticket.interface";

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  @Input() ticket: Ticket = {} as Ticket

  constructor() {
  }

  ngOnInit() {
  }

  addToCart() {
    console.log(this.ticket)
  }
}
