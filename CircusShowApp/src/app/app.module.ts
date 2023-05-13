import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {TicketsModule} from "./tickets/tickets.module";
import {CartComponent} from './cart/cart.component';
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [AppComponent, CartComponent],
  imports: [BrowserModule, FormsModule, TicketsModule, AppRoutingModule],
  bootstrap: [AppComponent],
})

export class AppModule {
}
