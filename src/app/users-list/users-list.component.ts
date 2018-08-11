import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../User';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  private users : User[];
  private newName : string = '';
  constructor(private userService: UsersService) {
    this.userService.getAllUsers().subscribe((data) => {
      this.users = data;
    })
  }

  ngOnInit() {
  }

  newUser(){
    let user = new User();
    user.name = this.newName;
    this.userService.addUser(user).subscribe((data) => {
      // user added successfully
      this.users.push(data);
    });
  }

  deleteUser(id){
    this.userService.deleteUser(id).subscribe((data) => {
      // user deleted
      this.users = this.users.filter((element) => {
        return element.id !== id;
      });
    });
  }

}
