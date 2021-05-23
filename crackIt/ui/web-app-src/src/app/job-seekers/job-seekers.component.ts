import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-seekers',
  templateUrl: './job-seekers.component.html',
  styleUrls: ['./job-seekers.component.scss']
})
export class JobSeekersComponent implements OnInit {

  title: any;
  sliderData: any;
  contents: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get("assets/content/job-seekers.json").subscribe(data => {
      this.title = data['title'];
      this.contents = data['jobSeekersContent'];
      this.sliderData = data['sliderData'];
    })
  }

}
