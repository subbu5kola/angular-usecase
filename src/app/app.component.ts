import { Component, OnInit } from '@angular/core';
import { CommonService } from './common.service';
import { Observable } from 'rxjs';
import { RequestData } from './request-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private service: CommonService) {

  }
  count: number = 0;

  title = 'angular-usecase';
  tabs: TabItem[] = [
    {
      label: 'Manager Request',
      icon: 'person',
      route: 'employees',
    },
    {
      label: 'Requests',
      icon: 'search',
      route: 'employee/request',
    },
  ];

  ngOnInit(){
  this.service.loadData();
  }

  getCount():number {
    this.service.requestData.subscribe(r=>this.count=r.length);
    return this.count;
  }
  

}

export interface TabItem {
  label: string;
  icon: string;
  route: string;
}
