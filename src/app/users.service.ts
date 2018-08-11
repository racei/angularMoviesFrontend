import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private Address = environment.apiAddress;
  private headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});

  constructor(private http: HttpClient) { }


  public getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.Address + 'Users');

  }
  public addUser(User: User) : Observable<User> {
    return this.http.post<User>(this.Address + 'Users', JSON.stringify(User), {headers: this.headers});
  }

  public deleteUser(id): Observable<Object> {
    return this.http.delete(this.Address + 'users/' + id);
  }
}
