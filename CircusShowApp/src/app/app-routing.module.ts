import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {TicketsComponent} from "./tickets/tickets.component";
import {CartComponent} from "./cart/cart.component";


const routes: Routes = [
  {path: '', component: TicketsComponent},
  {path: 'cart', component: CartComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
