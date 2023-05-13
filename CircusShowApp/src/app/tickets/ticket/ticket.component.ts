import {Component, Input, OnInit} from '@angular/core';
import {Ticket} from "./ticket.interface";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  @Input() ticket: Ticket = {} as Ticket;
  isInCart: boolean = false;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
  }

  addToCart() {
    this.isInCart = true;
    this.cartService.add(this.ticket)
  }

  removeFromCart() {
    this.isInCart = false;
    this.cartService.remove(this.ticket)
  }


}
