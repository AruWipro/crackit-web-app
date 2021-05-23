import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'staffing-service';
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
  onScrollToTop(){
    
  }
}
