import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './component/contact-list/contact-list.component';
import { AddContactComponent } from './component/add-contact/add-contact.component';
import { UpdateContactComponent } from './component/update-contact/update-contact.component';
import { LoginSignupComponent } from './component/login-signup/login-signup.component';
import { authGuard } from './Shared/auth.guard';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';
import { ServerErrorComponent } from './component/server-error/server-error.component';
import { AdminloginSignupComponent } from './component/adminlogin-signup/adminlogin-signup.component';
import { AdminViewComponent } from './component/admin-view/admin-view.component';
import { adminauthGuard } from './Shared/adminauth.guard';

const routes: Routes = [
  {path:'', redirectTo:'login-signup', pathMatch:'full'},
  
  {path: 'contactlist', component: ContactListComponent, canActivate:[authGuard]},
  {path: 'addcontact', component: AddContactComponent, canActivate:[authGuard]},
  {path: 'updatecontact/:id', component: UpdateContactComponent, canActivate:[authGuard]},
  {path: 'login-signup', component: LoginSignupComponent},
  {path: 'server-error', component: ServerErrorComponent},
  {path: 'admin-login-signup', component: AdminloginSignupComponent},
  {path: 'admin-view', component: AdminViewComponent, canActivate:[adminauthGuard]},
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
