import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../models/user.model';
import { addUser } from '../state/user.actions';

@Component({
  selector: 'app-add-user',
  //templateUrl: './add-user.component.html',
  template: `
  <h2>Add User</h2>
  <form (submit)="onSubmit()">
    <input type="text" [(ngModel)]="name" placeholder="Name" required [ngModelOptions]="{ standalone: true }" />
    <input type="email" [(ngModel)]="email" placeholder="Email" required   [ngModelOptions]="{ standalone: true }"/>
    <button type="submit">Add User</button>
  </form>
`,
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  name: string = '';
  email: string = '';

  constructor(private store: Store) {}

  onSubmit() {
    const newUser: User = {
      id: Math.floor(Math.random() * 10000),
      name: this.name,
      email: this.email,
    };
    this.store.dispatch(addUser({ user: newUser }));
    this.name = '';
    this.email = '';
  }

}


