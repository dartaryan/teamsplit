import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {TicketsComponent} from './tickets/tickets.component';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [AppComponent, TicketsComponent],
  imports: [BrowserModule, FormsModule, CommonModule],
  bootstrap: [AppComponent, TicketsComponent],
})

export class AppModule {
}
