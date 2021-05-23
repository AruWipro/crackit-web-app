import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  imageObject: any;
  
  constructor() {

  }

  ngOnInit() {
    this.imageObject = [{
      image: 'assets/images/banner-1.jpg',
      thumbImage: 'assets/images/banner-1.jpg',

    }, {
      image: 'assets/images/banner-2.jpg',
      thumbImage: 'assets/images/banner-2.jpg',

    }
    ];
  }

}
