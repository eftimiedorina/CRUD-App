import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders,} from '@angular/common/http';
import {HttpResponse,HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs'
import { map, catchError } from 'rxjs/operators'

import {User} from '../user'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
 
  private baseUrl:string ='http://localhost:8080/api';
  private httOptions = { headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'pass'
  })};
  constructor(private http:HttpClient) { }

  getUsers(){

    return this.http.get(this.baseUrl+'/users',this.httOptions).pipe(map((response:Response)=>response.json()),catchError(this.errorHandler));
  }
  getUser(id:Number){

    return this.http.get(this.baseUrl+'/user'+id,this.httOptions).pipe(map((response:Response)=>response.json()),catchError(this.errorHandler));
  }

  deleteUser(id:Number){

    return this.http.delete(this.baseUrl+'/user'+id,this.httOptions).pipe(map((response:Response)=>response.json()),catchError(this.errorHandler));
  }

  createUsers(user:User){

    return this.http.post(this.baseUrl+'/users',JSON.stringify(user),this.httOptions).pipe(map((response:Response)=>response.json()),catchError(this.errorHandler));
  }

  updateUsers(user:User){

    return this.http.put(this.baseUrl+'/users',JSON.stringify(user),this.httOptions).pipe(map((response:Response)=>response.json()),catchError(this.errorHandler));
  }

  errorHandler(error:Response){
    return Observable.throw(error || "server error");
  }

  
}
