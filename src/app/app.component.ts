import { Component, OnInit } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private service:CommonService){

  }
  count:number=0;
  
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

  ngOnInit(): void {
    this.service.addRequestCount();
    this.service.requestCount.subscribe(count=>
      this.count=count
      )
  }

  getCount(){
  this.service.requestCount.subscribe(count=>
    this.count=count
    )
  }
}

export interface TabItem {
  label: string;
  icon: string;
  route: string;
}
