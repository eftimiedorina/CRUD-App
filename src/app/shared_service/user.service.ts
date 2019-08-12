import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs'


import {User} from '../user'

@Injectable({
  providedIn: 'root'
})

// to consume my API
export class UserService {
  
 
  private baseUrl:string ='http://localhost:8080/api';
  private user:User;
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

  createUser(user:User){

     return this.http.post(`${this.baseUrl}/${user}`,user);
    
  }

  updateUser(id: number,user:User):Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`,user);

    
  }

  setter(user:User){
    this.user = user;
  }

  getter(){
    return this.user;
  }

  // errorHandler(error:Response){
  //   return Observable.throw(error || "server error");
  // }

  
}
