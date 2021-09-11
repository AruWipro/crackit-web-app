import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'CrackIT-Staffing-Service';
  imageObject: any;
  currentYear = (new Date()).getFullYear();
  constructor() {

  }

  ngOnInit() {
    this.imageObject = [{
      image: 'assets/images/banner-1.jpg',
      thumbImage: 'assets/images/banner-1.jpg',

    }, {
      image: 'assets/images/banner-2.jpg',
      thumbImage: 'assets/images/banner-2.jpg',

    },
    {
      image: 'assets/images/banner-3.jpg',
      thumbImage: 'assets/images/banner-3.jpg',

    }
    ];
  }
  onScrollToTop() {

  }
}
