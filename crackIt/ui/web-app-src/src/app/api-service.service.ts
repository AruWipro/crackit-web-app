import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  apiServer = 'https://crudcrud.com/api/28adbd2b1acc40cd8d342a4225ca0c62';
  httpOptions = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  }
  private _items: any;
  constructor(private httpClient: HttpClient) { }

  create(form):any  {
    // const categoryType = '/' + product.categoryType + '/';
    // return this.httpClient.post(this.apiServer + categoryType, JSON.stringify(product), this.httpOptions);
  }
}
