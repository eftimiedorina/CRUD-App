import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders,} from '@angular/common/http';
//import {HttpResponse,HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs'
import { map, catchError } from 'rxjs/operators'

import {User} from '../user'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
 
  private baseUrl:string ='http://localhost:8080/api';
 
  
  constructor(private http:HttpClient) { }

  getUsers():Observable<any>{

   
   return this.http.get(`${this.baseUrl}`+`/users`);
  }
  getUser(id:Number):Observable<Object>{

    return this.http.get(`${this.baseUrl}/user/${id}`);

    
  }

  deleteUser(id:Number){
      
    return this.http.delete(`${this.baseUrl}/user/${id}`);
   
  }

  createUsers(user:User){

     return this.http.post(`${this.baseUrl}/${user}`,user);
    
  }

  updateUsers(id: number,user:User):Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`,user);

    
  }

  errorHandler(error:Response){
    return Observable.throw(error || "server error");
  }

  
}
