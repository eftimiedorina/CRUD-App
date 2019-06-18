import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared_service/user.service';
import {User} from '../../user';



@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  //hold users
  private users:User[];
  constructor(private userService:UserService) { }

  ngOnInit() {
     this.userService.getUsers().subscribe((users: User[]) => {
      console.log(users);
      this.users =users;
    }
      );
    // this.userService.getUsers().subscribe((users)=>{
    //   console.log(users);
    
    // },(error)=>{
    //   console.log(error);
    // })
  }

}
