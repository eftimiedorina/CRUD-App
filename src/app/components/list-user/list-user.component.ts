import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared_service/user.service'; // injected them to use methods
import {User} from '../../user';
import {Router} from '@angular/router'


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  

  //hold users from the backend
  private users:User[];
  constructor(private userService:UserService,private _router:Router) { } // intejcted class

  ngOnInit() {
     this.userService.getUsers().subscribe((users: User[]) => {
      console.log(users);
      this.users =users;
    }
      );
  }

  deleteUser(user){
    this.userService.deleteUser(user.id).subscribe((data) => {
    this.users.splice(this.users.indexOf(user),1);
    },(error) =>{ console.log(error); }
    );
  }


  updateUser(user){
    this.userService.setter(user);
    this._router.navigate(['/op']);
  }

  newUser(){
    let user = new User();
    this.userService.setter(user);
    this._router.navigate(['/op']);

  }

  // updateUser(id,user){
  //   this.userService.updateUsers(id, user);
  //   this._router.navigate(['/op']);
    
  // }
 

}
