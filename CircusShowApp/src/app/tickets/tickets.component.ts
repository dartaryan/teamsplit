import {Component} from '@angular/core';

interface Ticket {
  show: string;
  location: string;
  image: string;
  amount: number;
}

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})

export class TicketsComponent {
  tickets: Ticket[] = [
    {
      show: "WE CyberPunk",
      location: "HaOman",
      image: "https://static.wixstatic.com/media/2c6014_676333330e564a718461f3929738db44~mv2.png/v1/fill/w_1920,h_835,al_c,q_90,enc_auto/We-Cyberpunk_12-05_Cover_Website.png",
      amount: 160,
    },
    {
      show: "PRIDE TLV",
      location: "TLV",
      image: "https://static.wixstatic.com/media/2c6014_2a142f07bd264da19b18000107afd58ff000.jpg/v1/fill/w_1253,h_556,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/2c6014_2a142f07bd264da19b18000107afd58ff000.jpg",
      amount: 220,
    },
    {
      show: "XXO Party On The River",
      location: "cruise ship",
      image: "https://dearstraightpeople.com/wp-content/uploads/2020/11/XXO-Party-2020.jpg",
      amount: 120,
    },
    {
      show: "Bearadise® Bear Pride",
      location: "Puerto Vallarta",
      image: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F494877159%2F209173948363%2F1%2Foriginal.20230418-010012?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=9dc4298366d61225ec24f2e19d36211c",
      amount: 90,
    },
  ]

  isShowing: boolean = true;

  constructor() {
  }

  ngOnInit(): void {
  }
}
