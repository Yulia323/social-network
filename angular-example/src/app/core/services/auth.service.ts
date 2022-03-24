import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {BASE_AUTH_URL} from '../../app.constants';
import {Observable} from 'rxjs';
import {StorageService} from './storage.service';

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(private http: HttpClient,
              private storageService: StorageService) {
  }

  login(username: string, password: string) {
    return this.http
      .post(BASE_AUTH_URL + '/login', {username, password,})
      .pipe(tap(token => this.setAuthToken(token)));
  }

  registration(username: string, password: string): Observable<any> {
    return this.http.post(BASE_AUTH_URL + '/registration', {username, password,});
  }

  logout() {
    this.storageService.removeLocalItem('token');
  }

  get authToken(): string {
    const authToken = this.storageService.getLocalItem('token');
    return authToken ? authToken : '';
  }

  setAuthToken(authToken: Object) {
    this.storageService.setLocalItem('token', `Bearer ${authToken}`)
  };
}

