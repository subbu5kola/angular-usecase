import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { RequestData } from '../request-data';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  constructor(private service: CommonService, private router: Router) {

  }

  data$ =this.service.getAllEmployeeRequest();

  formData: FormGroup;

  ngOnInit(): void {
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
      let empData = this.formData.value as RequestData;
      let count=0;

      this.service.getEmployeeRequest(empData.id).subscribe(r=>{
       if(r!==null)
        empData.requestId=r.length+1;
        else
        empData.requestId=1;
       this.saveData(empData);
      });     
    }
  }

  saveData(empData){
    this.service.saveEmployeeRequest(empData.id,empData).subscribe(r=>{
      this.service.loadData();
      this.data$ =this.service.requestData;
      this.router.navigateByUrl('/employee/request');
  });
  }
}
