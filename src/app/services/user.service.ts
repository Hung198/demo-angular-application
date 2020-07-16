import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observer, Observable } from 'rxjs';
import { User } from 'src/app/entities/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8080/api/users');
  }
}
