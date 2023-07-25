import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { RequestData } from '../request-data';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent {

  constructor(private service: CommonService, private router: Router) {

  }
  data$=this.service.getAllEmployeeRequest();
  

  onAccept(r: RequestData) {
    r.status = 'Accepted';
    this.service.updateEmployeeRequest(r.id,r.requestId,r).subscribe(r=>{
    });
    this.service.loadData();
  }

  onReject(r: RequestData) {
    r.status = 'Rejected';
    this.service.updateEmployeeRequest(r.id,r.requestId,r).subscribe(r=>{
    });
    this.service.loadData();
  }
}
