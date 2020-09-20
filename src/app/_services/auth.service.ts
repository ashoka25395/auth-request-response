import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { TokenStorageService } from './token-storage.service';

//const AUTH_API = 'http://localhost:8080/api/auth/';


const AUTH_API = 'https://leap-finance.herokuapp.com/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor(private http: HttpClient, private router: Router, private tokenStorage: TokenStorageService) { }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  getMultipartRequestOption(): any {
    if (this.tokenStorage.getToken()) {
      //do nothing
    }
    else{
      this.router.navigate(['login']);
    }
  }
}
