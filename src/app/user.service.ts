import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from './user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'http://10.10.193.143:100002/user';  // URL to node
  constructor( 
    private http: HttpClient
  ) { }
 
  getUser(id: number): Observable<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<User>(url);
  }
 
  addUser (user: User): Observable<User> {
    console.log(this.usersUrl+'/register');
    return this.http.post<User>(this.usersUrl+'/register', user, httpOptions);
  }
 
  deleteUser (user: User): Observable<User> {
    const username = user.username;
    const url = `${this.usersUrl}/${username}`;
 
    return this.http.delete<User>(url, httpOptions);
  }
 
  updateUser (user: User): Observable<any> {
    return this.http.put(this.usersUrl, user, httpOptions);
  }
}