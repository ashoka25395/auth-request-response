import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { RequestUrlComponent } from './request-url/request-url.component';
import { ResponseUrlComponent } from './response-url/response-url.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RequestUrlComponent,
    ResponseUrlComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
