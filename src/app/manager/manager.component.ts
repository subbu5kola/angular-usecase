import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { RequestData } from '../request-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  constructor(private service: CommonService, private router: Router) {

  }

  data: RequestData[] = [];
  ngOnInit(): void {
    this.data = this.service.requestData;
  }

  onAccept(r: RequestData) {
    let row = this.data.indexOf(r);
    if (row !== -1)
      this.data[row].status = 'Accepted';
    console.log(this.data[row]);
    this.service.addRequestCount();
    this.router.navigateByUrl('/employees');
  }

  onReject(r: RequestData) {
    let row = this.data.indexOf(r);
    if (row !== -1)
      this.data[row].status = 'Rejected';
    console.log(this.data[row]);
    this.service.addRequestCount();
    this.router.navigateByUrl('/employees');
  }
}
