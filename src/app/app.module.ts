import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { DetailUserComponent } from './users/detail-user/detail-user.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { ViewAddedUserComponent } from './users/view-added-user/view-added-user.component';

// DatePicker
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


// Services
import { UsersService } from './services/users.service';
import { LoginComponent } from './login/login.component';
import { LoginService } from './services/login.service';
import { RegisterComponent } from './register/register.component';
import {RegisterService} from './services/register.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListUsersComponent,
    DetailUserComponent,
    AddUserComponent,
    ViewAddedUserComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
     UsersService,
     LoginService,
     RegisterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
