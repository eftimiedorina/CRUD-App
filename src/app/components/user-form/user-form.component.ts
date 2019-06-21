import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import {Router} from '@angular/router'
import {UserService} from '../../shared_service/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  private user:User;

  constructor(private userService:UserService,private _router:Router) { }

  ngOnInit() {
    //this.user = new User();
  }
  newUser(){

    let user = new User();
     this.userService.createUsers(user).subscribe(data => console.log(data), error => console.log(error));;
     this._router.navigate(['/op']);
     
   }

  onSubmit(){
    if(this.user.id==undefined){
      this.userService.createUsers(this.user).subscribe((user)=>{
      console.log(user);
      this._router.navigate(['/']);
      },(error)=> console.log(error)
      );
    }else{
      // this.userService.updateUsers(this.user.id,this.user).subscribe((user)=>{
      //   console.log(user);
      //   this._router.navigate(['/']);
      //   },(error)=> console.log(error)

    }
  }

}
