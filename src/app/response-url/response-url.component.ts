import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-response-url',
  templateUrl: './response-url.component.html',
  styleUrls: ['./response-url.component.css']
})
export class ResponseUrlComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {
    this.myForm = this.fb.group({
      response: ['']
    })

    this.route.params.subscribe(params => {
      this.myForm.patchValue({
        response: params['data']
      });
    });

  }

  ngOnInit(): void {
  }
}
