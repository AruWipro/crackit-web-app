import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employers',
  templateUrl: './employers.component.html',
  styleUrls: ['./employers.component.scss']
})
export class EmployersComponent implements OnInit {

  title: any;
  sliderData: any;
  contents: any;
  inputList = [
    "Administrative",
    "Executive Staffing",
    "IT Staffing",
    "Human Resources",
    "Healthcare",
    "Sales  Marketing",
    "Industrial / Manufacturing"
  ];
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get("assets/content/employers.json").subscribe(data => {
      this.title = data['title'];
      this.contents = data['employeersContent'];
      this.sliderData = data['sliderData'];
    });

  }

}
