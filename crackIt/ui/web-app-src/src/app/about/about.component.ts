import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  title: any;
  sliderData: any;
  contents: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get("assets/content/about.json").subscribe(data => {
      this.title = data['title'];
      this.contents = data['aboutContent'];
      this.sliderData = data['sliderData'];
    })
  }

}
