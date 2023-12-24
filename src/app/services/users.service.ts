import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { setUsers } from '../store/users/users.actions';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<UserModel[]> {
    return this.httpClient.get<UserModel[]>(
      'https://jsonplaceholder.typicode.com/users'
    );
  }
}
