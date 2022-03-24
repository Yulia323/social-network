import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../../core/services/users.service';
import {UserProfile} from "../../../core/services/profile.service";

@Component({
  selector: 'app-users',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {
  users: UserProfile[] = []

  constructor(public usersService: UsersService) {
  }

  ngOnInit(): void {
    this.usersService.getUsersProfile().subscribe(users => this.users = users);
  }

}
