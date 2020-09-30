import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

   url="https://kunal-portfolio007.firebaseio.com/message.json";

   post(value={}){
       return this.http.post(this.url,value);
   }

}
