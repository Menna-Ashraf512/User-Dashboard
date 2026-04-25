import { Component, signal } from '@angular/core';
import { UsersList } from "./Feature/Components/users-list/users-list";
@Component({
  selector: 'app-root',
  imports: [UsersList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('User-Dashboard');
}
