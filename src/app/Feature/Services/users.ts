import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsers } from '../Interfaces/iusers';

@Injectable({
  providedIn: 'root',
})
export class Users {
  constructor(private _HttpClient:HttpClient) { }

  getUsers():Observable<IUsers[]> {
    return this._HttpClient.get<IUsers[]>('https://jsonplaceholder.typicode.com/users');
  }

}
