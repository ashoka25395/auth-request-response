import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RequestUrlComponent } from './request-url/request-url.component';
import { ResponseUrlComponent } from './response-url/response-url.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'responsedata/:data', component: ResponseUrlComponent },
  { path: 'request-page', component: RequestUrlComponent },
  { path: 'response-page', component: ResponseUrlComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
