import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Subject, takeUntil} from "rxjs";
import {Post, ProfileService, UserProfile} from "../../../../core/services/profile.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  @ViewChild('status') status: ElementRef;
  private unsubscribe$ = new Subject<void>()
  editedPostId: number | null
  posts: Post[] = []
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
      content: '',
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
  }

  ngOnInit(): void {
    this.profileService.getPosts().subscribe(posts => this.posts = posts);
    this.profileService.getUserProfile().subscribe(userProfile => this.userProfile = userProfile);
  }

  addPost() {

    if (!this.postContent.trim()) {
      return
    }

    this.profileService.addPost(this.postContent)
      .subscribe((post: any) => {
        this.posts.push(post)
        this.postContent = ''
      })
  }

  removePost(id: number) {
    this.profileService.removePost(id)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => {
        this.posts = this.posts.filter(t => t._id !== id)
      })
  }

  editPost(oldPost: Post) {
    const editedPost = {...oldPost, content: this.newContent}
    this.profileService.editPost(editedPost)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => {
        this.posts = this.posts.map(post => {
          if (post._id === editedPost._id) return editedPost
          else return post
        })
        this.editOff()
      })
  }

  editOn(post: Post) {
    this.editedPostId = post._id;
    this.newContent = post.content;
  }

  editOff() {
    this.editedPostId = null;
    this.newContent = '';
  }
}
