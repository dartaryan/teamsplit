import {Component, OnInit} from '@angular/core';
import {Ticket} from "./ticket/ticket.interface";
import {TicketsService} from "./tickets.service";


@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})

export class TicketsComponent implements OnInit {
  public cart: Ticket[] = [];
  public isShowing: boolean = true;
  public tickets: Ticket[] = [];

  constructor(private ticketsService: TicketsService) {
  }

  ngOnInit(): void {
    this.tickets = this.ticketsService.getTickets();
  }

}
