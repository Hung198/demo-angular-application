import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/entities/User';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: User[];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    this.userService
        .getUsers()
        .subscribe(response => this.users = response);
  }

}
