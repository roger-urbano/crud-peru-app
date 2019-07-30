import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListUsersComponent} from './users/list-users/list-users.component';
import {AddUserComponent} from './users/add-user/add-user.component';
import {DetailUserComponent} from './users/detail-user/detail-user.component';
import {ViewAddedUserComponent} from './users/view-added-user/view-added-user.component';

const routes: Routes = [
   { path: '', component: ListUsersComponent, pathMatch: 'full' },
   { path: 'usuarios',
      children: [
         { path: '', component: ListUsersComponent },
         { path: 'detalle-usuario/:id', component: DetailUserComponent },
      ]},
   { path: 'agregar-usuario',
      children: [
         { path: '', component: AddUserComponent },
         { path: 'nuevo-usuario', component: ViewAddedUserComponent },
      ]
   },
   // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
     RouterModule.forRoot(routes),
     RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
