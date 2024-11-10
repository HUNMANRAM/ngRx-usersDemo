import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { UserTableComponent } from './user-table/user-table/user-table.component';

const routes: Routes = [
  {path:'add-user',component:AddUserComponent},
  {path:'user-table',component:UserTableComponent},
  {path:'',redirectTo: '/add-user',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { AddUserComponent } from './add-user/add-user.component';
// import { UserTableComponent } from './user-table/user-table.component';

// const routes: Routes = [
//   { path: 'add-user', component: AddUserComponent },
//   { path: 'user-table', component: UserTableComponent },
//   { path: '', redirectTo: '/add-user', pathMatch: 'full' },
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
// export class AppRoutingModule {}
