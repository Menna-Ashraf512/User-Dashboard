import { Users } from './../../Services/users';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { MultiSelectModule } from 'primeng/multiselect';
import { Table, TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { InputTextModule } from 'primeng/inputtext';
import { IUsers } from '../../Interfaces/iusers';


@Component({
  selector: 'app-users-list',
  imports: [SelectModule, IconFieldModule, InputIconModule, MultiSelectModule, TableModule, TagModule, InputTextModule, FormsModule],
  templateUrl: './users-list.html',
  styleUrl: './users-list.css',
})
export class UsersList {
  constructor(private _Users: Users) { }
  customers!: IUsers[];
  loading: boolean = true;
  errorMessage: string = '';
  ngOnInit() {
    this.getUsers();
  }


  getUsers() {
    this._Users.getUsers().subscribe(
      (res: any) => {
        this.customers = res;
        this.loading = false;
      },
      (err: any) => {
        this.errorMessage = 'Failed to load users ❌';
        this.customers = [];
        this.loading = false;
      }
    );
  }
}
