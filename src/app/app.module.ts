import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { UserFormComponent } from './components/user-form/user-form.component';

const appRoutes:Routes=[
   {path:'', component:ListUserComponent},
   {path:'op', component:UserFormComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
