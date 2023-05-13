import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {TicketsComponent} from './tickets/tickets.component';
import {FormsModule} from "@angular/forms";
import { CommonModule } from '@angular/common';
import { TicketComponent } from './ticket/ticket.component';

@NgModule({
  declarations: [AppComponent, TicketsComponent, TicketComponent],
  imports: [CommonModule, BrowserModule, FormsModule],
  bootstrap: [AppComponent, TicketsComponent],
})

export class AppModule {
}
