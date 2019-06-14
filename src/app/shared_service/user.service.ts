import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpResponse, HttpHeaders,HttpRequest} from '@angular/common/http';

import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
 
  private baseUrl:string ='http://localhost:8080/api';

  constructor(private http:HttpClient) { }

  getUsers(){

    return this.http.get(this.baseUrl+'/users').map((res:Response)=>res.json());
  }

  
}
