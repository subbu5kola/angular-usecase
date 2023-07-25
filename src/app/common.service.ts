import { Injectable } from '@angular/core';
import { RequestData } from './request-data';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }

  requestData: Subject<RequestData[]> = new Subject();

  loadData(){
    this.getAllEmployeeRequest().subscribe(data=>{
      this.requestData.next(data);
    });
    }
  
  getEmployeeRequest(id:number){
   return this.http.get<RequestData[]>('http://localhost:8080/employees/'+id+'/requests');
  }

  getAllEmployeeRequest(){
   return this.http.get<RequestData[]>('http://localhost:8080/employees');
  }

  saveEmployeeRequest(id:number,requestData:RequestData){
    return this.http.post<string>('http://localhost:8080/employees/'+id+'/requests',requestData);
  }

  updateEmployeeRequest(id:number,requestId:number,requestData:RequestData){
    return this.http.patch<string>('http://localhost:8080/employees/'+id+'/requests/'+requestId,requestData);
  }
}
