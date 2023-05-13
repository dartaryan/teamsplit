import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TicketsService} from "./tickets.service";
import {TicketsComponent} from "./tickets.component";
import {TicketComponent} from "./ticket/ticket.component";


@NgModule({
  declarations: [TicketsComponent, TicketComponent],
  imports: [CommonModule],
  providers: [TicketsService],
  exports: [TicketsComponent]
})

export class TicketsModule {
}
