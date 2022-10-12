import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { EmployeeDetail } from './employeedetail.model';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailService {


list:EmployeeDetail[];
readonly url='http://localhost:5000/'
constructor(private http:HttpClient) { }

  getemployeedata(id:number){
return this.http.get(this.url+'api/EmployeeDetail/'+id)
.toPromise().then(res=>this.list=res as EmployeeDetail[])
  }


}
