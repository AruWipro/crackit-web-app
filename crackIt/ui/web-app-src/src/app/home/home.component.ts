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

  constructor(config: NgsRevealConfig) {
    config.duration = 5000;
    config.easing = 'cubic-bezier(0.645, 0.045, 0.355, 1)';
    config.origin = 'left'
  }

  ngOnInit() {
    this.imageObject = [{
      image: 'assets/images/banner-1.jpg',
      thumbImage: 'assets/images/banner-1.jpg',

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
  }

}
