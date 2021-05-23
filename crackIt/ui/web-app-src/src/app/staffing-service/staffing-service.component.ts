import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staffing-service',
  templateUrl: './staffing-service.component.html',
  styleUrls: ['./staffing-service.component.scss']
})
export class StaffingServiceComponent implements OnInit {

  title: any;
  sliderData: any;
  contents: any;
  inputList = [
    'wdw',
    'sdsd'
  ]

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get("assets/content/staff-service.json").subscribe(data => {
      this.title = data['title'];
      this.contents = data['serviceContent'];
      this.sliderData = data['sliderData'];
    })
  }

}
