import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Customer } from '../models/customer';
import { CustomerService } from '../services/customer.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrl: './order-view.component.css'
})
export class OrderViewComponent implements OnInit {

  id?:number;
  product:Product={}
  customer:Customer={};
  submitStatus:boolean=false;

  constructor(private ac:ActivatedRoute, private productService:ProductsService,
    private customerService:CustomerService,
     private fb:FormBuilder, private _snackBar:MatSnackBar){}

  ngOnInit(): void {
    this.ac.paramMap.subscribe(params=> {  
      let id=params.get('id')??0;
      this.productService.getProductById(+id).subscribe(data=>
      {
        this.product=data;
        console.log(data);
        
      })
    })
  }

onSubmit(){
  let registerCustomer:Customer = this.customerForm.value as Customer;

  this.customer.productName = this.product?.name;
  console.log(this.customer.productName);
  
  this.customerService.addCustomer(registerCustomer).subscribe({
    next:data =>{
      console.log(data);
      
      this._snackBar.open("Congrats!! Your order is placed!!",'success',{duration:5000,
        panelClass:['mat-toolbar','mat-primary']
      })
      this.submitStatus=true;
  },
  error:err => {
    this._snackBar.open('Failed to place order!! Please Try Again Later',
     'Failure',{duration:3000, panelClass:['mat-toolbar','mat-warn']
    })
  }
  })
}

customerForm = this.fb.group({
  fullName:['',[Validators.required,Validators.minLength(2)]],
  productName:[''],
  phone:['',[Validators.required,Validators.pattern(/^[789]\d{9}$/)]],
  address:this.fb.group({
    street:[''],
    city:[''],
    state:[''],
    zipCode:['',[Validators.pattern("^[0-9]{5,6}$")]]
  })
})

get fullName()
{
  return this.customerForm.get('fullName');
}

get phone()
  {
    return this.customerForm.get('phone');
  }

get street()
  {
    return this.customerForm.get('address.street');
  }

  get city()
  {
    return this.customerForm.get('address.city');
  }

  get state()
  {
    return this.customerForm.get('address.state');
  }

  get zipCode()
  {
    return this.customerForm.get('address.zipCode');
  }

  canDeactivate() {
    if (!this.submitStatus)
        this.submitStatus = confirm("You have not submitted a request to this Order. Any details entered will be lost. Are you sure you want to leave?");
    return this.submitStatus;
}

}
