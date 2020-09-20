import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthService } from './auth.service';

//const API_URL = 'http://localhost:8080/api/requestresponse/';
const API_URL = 'https://leap-finance.herokuapp.com/api/requestresponse/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {
  public multipartRequestOptions: any;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.getMultipartRequestOptions();

  }
  getMultipartRequestOptions() {
    this.multipartRequestOptions = this.authService.getMultipartRequestOption();
  }
  sendRequestUrl(requestUrl): Observable<any> {
    this.authService.getMultipartRequestOption();
    return this.http.post(API_URL + "url?url=" + requestUrl, {},httpOptions);
  }

}
