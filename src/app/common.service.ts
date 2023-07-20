import { Injectable } from '@angular/core';
import { RequestData } from './request-data';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  requestCount: Subject<number> = new Subject();

  requestData: RequestData[] = [{ id: 1, name: 'ramesh', address: 'hyderabad', account: 1, manager: 'raj', status: '' },
  { id: 2, name: 'yogesh', address: 'bangalore', account: 2, manager: 'raj', status: '' }];

  addRequestCount() {
    let count = this.requestData.filter(i => i.status === 'Rejected' || i.status === 'Accepted')
    this.requestCount.next(count.length)
    console.log(count.length);
  }
}
