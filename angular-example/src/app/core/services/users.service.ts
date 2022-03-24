import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BASE_URL} from '../../app.constants';
import {UserProfile} from "./profile.service";

export interface Users {
  username: string;
  surname: string;
  roles: string;
  password: string;
  avatar: string;
}

@Injectable()
export class UsersService {
  private urlUser = BASE_URL + '/friends';
  private urlProfiles = BASE_URL + '/friends/profiles';

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.urlUser)
  }

  getUsersProfile(): Observable<UserProfile[]> {
    return this.http.get<UserProfile[]>(this.urlProfiles)
  }
}
