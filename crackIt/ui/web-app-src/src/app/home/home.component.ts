import { Component, OnInit } from '@angular/core';
import {NgsRevealConfig} from 'ngx-scrollreveal'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgsRevealConfig]
})
export class HomeComponent implements OnInit {

  imageObject: any;
  clientImages: { image: string; thumbImage: string; }[];

  constructor(config: NgsRevealConfig) {
    config.duration = 5000;
    config.easing = 'cubic-bezier(0.645, 0.045, 0.355, 1)';
    config.origin = 'left'
  }

  ngOnInit() {
    this.imageObject = [{
      image: 'assets/images/banner-1.jpg',
      thumbImage: 'assets/images/banner-2.jpg',

    },
    {
      image: 'assets/images/banner-3.jpg',
      thumbImage: 'assets/images/banner-3.jpg',

    },
    {
      image: 'assets/images/banner-4.jpg',
      thumbImage: 'assets/images/banner-4.jpg',

    }
    ];
    this.clientImages = [{
      image: 'assets/images/clients/client-1.png',
      thumbImage: 'assets/images/clients/client-1.png',

    },
    {
      image: 'assets/images/clients/client-3.png',
      thumbImage: 'assets/images/clients/client-3.png',

    },
    {
      image: 'assets/images/clients/client-2.png',
      thumbImage: 'assets/images/clients/client-2.png',

    },
    {
      image: 'assets/images/clients/client-5.png',
      thumbImage: 'assets/images/clients/client-5.png',

    },
    {
      image: 'assets/images/clients/client-6.png',
      thumbImage: 'assets/images/clients/client-6.png',

    },
    {
      image: 'assets/images/clients/client-7.png',
      thumbImage: 'assets/images/clients/client-7.png',

    },
    {
      image: 'assets/images/clients/client-8.png',
      thumbImage: 'assets/images/clients/client-8.png',

    },
    {
      image: 'assets/images/clients/client-4.png',
      thumbImage: 'assets/images/clients/client-4.png',

    }
    ];
  }

}
