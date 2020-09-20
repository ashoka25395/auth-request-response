import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-url',
  templateUrl: './request-url.component.html',
  styleUrls: ['./request-url.component.css']
})
export class RequestUrlComponent implements OnInit {
  myForm: FormGroup;
  isError: boolean = false;

  submitted = false;
  errorMessage: any;
  
  

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
   
  }

  ngOnInit(): void {
    const urlRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
   
    this.myForm = this.fb.group({
      url: ['', [Validators.required, Validators.pattern(urlRegex)]]
    })
  }

  get f() { return this.myForm.controls; }


/**
 * @author ashok 
 * This method is used to send request url and get the corrosponding response
 */ 
  onSubmit(): void {
    this.submitted = true;
    if (this.myForm.invalid) {
      return;
    }
    this.userService.sendRequestUrl(this.myForm.value.url).subscribe(
      data => {
        this.isError = false;
        this.router.navigate(['responsedata', data.response]);
        console.log(data);
      },
      err => {
        if (err.error && err.error.message) {

          this.errorMessage = err.error.message;
        }
        else {

          this.errorMessage = "Something went wrong!!!";
        }
        this.isError = true;
      }
    );
  }


}
