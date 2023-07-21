import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { RequestData } from '../request-data';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  constructor(private service: CommonService, private router: Router) {

  }

  data: RequestData[];
  formData: FormGroup;

  ngOnInit(): void {
    this.data = this.service.requestData;
    this.formData = new FormGroup({
      id: new FormControl('', [
        Validators.required
      ]),
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10)
      ]),
      address: new FormControl(''),
      account: new FormControl(''),
      manager: new FormControl('', [
        Validators.required
      ])
    });
  }

  onSubmit(formData: FormGroup) {
    if (this.formData.valid) {
      const empData = this.formData.value as RequestData;
      
     if(this.service.requestData.find((f)=>f.id===formData.value.id && f.name===formData.value.name && f.manager===formData.value.manager)===undefined)
      this.service.requestData.push(empData);
    }
  }
}
