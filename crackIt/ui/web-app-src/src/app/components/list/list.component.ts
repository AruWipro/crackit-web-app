import { HttpClient } from '@angular/common/http';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  lists: any;
  title: any;
  @Input() inputList: any;
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    // this.httpClient.get("assets/content/list.json").subscribe(data => {
    //   this.lists = data;
    // })
    console.log(this.inputList);
  }

}
