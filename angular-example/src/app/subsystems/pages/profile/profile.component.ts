import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ProfileService, UserProfile} from '../../../core/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @ViewChild('status') status: ElementRef;
  defaultProfile: UserProfile = {
    _id: 1,
    avatar: '',
    name: '',
    surname: '',
    status: '',
    posts: [{
      _id: 1,
      author: '',
      data: '',
      content: 'ХУЙ',
    }],
    friends: [],
    settings: '',
    photo: [],
  }
  userProfile: UserProfile = this.defaultProfile
  postContent = ''
  newContent = ''
  newStatus = ''
  loading = false
  error = ''
  editStatus = false

  constructor(public profileService: ProfileService) {
    this.profileService.getUserProfile().subscribe(userProfile => this.userProfile = userProfile);
  }

  ngOnInit(): void {
  }

  editOnStatus() {
    this.editStatus = true;
    setTimeout(() => this.status.nativeElement.focus(), 0);
  }

  toggleEditStatus() {
    this.editStatus = !this.editStatus;
  }
}
