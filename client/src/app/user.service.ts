import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { User } from './user';
const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json'
  })
};
@Injectable()
export class UserService {
  usersUrl = environment.baseApiUrl + 'api/users/';

  constructor(private http: HttpClient) { }

  getUser(id: number) {
    return this.http.get<User>(this.usersUrl + id + '/');
  }
  putUser(user: User) {
    return this.http.put<User>(this.usersUrl + user.user_id + '/',user,httpOptions);
  }
}
