import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url: string = "http://localhost:3000/customers";
  constructor(private http:HttpClient) { }

  getAllOrders():Observable<Array<Customer>>{
    return this.http.get<Array<Customer>>(`${this.url}`)
  }
 
  addCustomer(customer?: Customer):Observable<Customer>
  {
    return this.http.post<Customer>(this.url,customer);
  }

}
