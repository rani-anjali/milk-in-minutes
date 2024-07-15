import { Component } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../models/customer';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-order-placed',
  templateUrl: './order-placed.component.html',
  styleUrl: './order-placed.component.css'
})
export class OrderPlacedComponent {
  displayedColumns: string[]=['customerName', 'customerPhone', 'customerAddress','productName'];
  customer:Customer[]=[];
  constructor(private customerService:CustomerService){}

  ngOnInit():void{
    this.customerService.getAllOrders().subscribe({
      next:data=>{
        this.customer=data;
        console.log(data);
        
      },
      error:err=>{
        alert(err);
      }
    })
  }
}
