import {Component} from '@angular/core';

interface Ticket {
  show: string;
  performer: string;
  image: string;
}

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})

export class TicketsComponent {
  tickets: Ticket[] = [
    {
      show: "WE",
      performer: "John",
      image: "https://cdn.britannica.com/96/198296-050-65D1A810/Clowns-tour-Ringling-Bros-Barnum-Atlanta-2017.jpg"
    },
    {
      show: "Yes",
      performer: "Phil",
      image: "https://cdn.britannica.com/96/198296-050-65D1A810/Clowns-tour-Ringling-Bros-Barnum-Atlanta-2017.jpg"
    },
  ]

  isShowing: boolean = true;

  constructor() {
  }

  ngOnInit()
    :
    void {
  }
}
