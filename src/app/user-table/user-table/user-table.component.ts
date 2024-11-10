import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { selectAllUsers } from '../../state/user.selectors';
import { updateUser } from '../../state/user.actions';

@Component({
  selector: 'app-user-table',
  template: `
    <h2>User List</h2>
    <table>
      <tr *ngFor="let user of users$ | async">
        <td>
        <input #nameInput type="text" [value]="user.name" />

          <!-- <input [(ngModel)]="editableUsers[user.id].name" [ngModelOptions]="{ standalone: true }"/> -->
        </td>
        <td>
        <input #emailInput type="text" [value]="user.email" />

          <!-- <input [(ngModel)]="editableUsers[user.id].email"   [ngModelOptions]="{ standalone: true }" /> -->
        </td>
        <td>
          <!-- <button (click)="onUpdateUser(user)">Update</button> -->
          <button (click)="onUpdateUser({ id:user.id, name: nameInput.value, email: emailInput.value })">Update</button>
          <!-- (click)="saveUser(user.id, nameInput.value, mobileInput.value, emailInput.value)" -->
        </td>
      </tr>
    </table>

   
<button routerLink="/add-user">Add User</button>

  `,
})
export class UserTableComponent {
  users$: Observable<User[]>;
  editableUsers: { [key: string]: { name: string; email: string } } = {};

  constructor(private store: Store) {
    this.users$ = this.store.select(selectAllUsers);
     // Initialize editableUsers map with data from the store
     this.users$.subscribe(users => {
      console.log(users);

      //this.editableUsers = [...users];
      users.forEach(user => {
        this.editableUsers[user.id] = { name: user.name, email: user.email };
      });
    });

  }

  onUpdateUser(user: User) {
    this.store.dispatch(updateUser({ user }));
  }

  
  // onUpdateUser(userId: number) {
  //   const user = { id: userId, ...this.editableUsers[userId] };
  //  // this.store.dispatch(updateUser({ user: updatedUser }));
  //  this.store.dispatch(updateUser({ user }));
  // }
}



// @Component({
//   selector: 'app-user-table',
//   template: `
//     <h2>User List</h2>
//     <table>
//       <tr *ngFor="let user of users$ | async">
//         <td>
//           <input [(ngModel)]="editableUsers[user.id].name" [ngModelOptions]="{ standalone: true }" />
//         </td>
//         <td>
//           <input [(ngModel)]="editableUsers[user.id].email" [ngModelOptions]="{ standalone: true }" />
//         </td>
//         <td>
//           <button (click)="onUpdateUser(user.id)">Update</button>
//         </td>
//       </tr>
//     </table>
//   `,
// })
// export class UserTableComponent {
//   users$: Observable<User[]>;
//   editableUsers: { [key: string]: { name: string; email: string } } = {};

//   constructor(private store: Store) {
//     this.users$ = this.store.select(selectAllUsers);

//     // Initialize editableUsers map with data from the store
//     this.users$.subscribe(users => {
//       users.forEach(user => {
//         this.editableUsers[user.id] = { name: user.name, email: user.email };
//       });
//     });
//   }

//   onUpdateUser(userId: string) {
//     const updatedUser = { id: userId, ...this.editableUsers[userId] };
//     this.store.dispatch(updateUser({ user: updatedUser }));
//   }
// }
