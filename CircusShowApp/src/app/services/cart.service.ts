import {Injectable} from '@angular/core';
import {Ticket} from "../tickets/ticket/ticket.interface";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Ticket[] = [];

  constructor() {
  }

  add(ticket: Ticket) {
    this.cart.push(ticket)
  }

  get() {
    return this.cart
  }

  remove(ticket: Ticket) {
    this.cart = this.cart.filter((tic => tic !== ticket))
  }

}
