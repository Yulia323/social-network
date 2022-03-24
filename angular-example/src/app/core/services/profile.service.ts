import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BASE_URL} from '../../app.constants';

export interface Post {
  author: string;
  data: string;
  content: string;
  _id: number
}

export interface UserProfile {
  _id: number,
  avatar: string,
  name: string,
  surname: string,
  status: string,
  posts: Post[],
  friends: [],
  settings: string,
  photo: [],
}

@Injectable()
export class ProfileService {
  private url = BASE_URL + '/posts';
  private urlProfile = BASE_URL + '/friends/profile';

  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url)
  }

  addPost(content: string): Observable<Post> {
    return this.http.post<Post>(this.url, {content: content})
  }

  removePost(id: number): Observable<void> {
    return this.http.delete<void>(this.url + `/${id}`)
  }

  editPost(post: Post): Observable<Post> {
    return this.http.put<Post>(this.url, post)
  }

  getUserProfile(): Observable<UserProfile> {
    return this.http.get<UserProfile>(this.urlProfile)
  }
}
