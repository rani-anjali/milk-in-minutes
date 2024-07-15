import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-views',
  templateUrl: './product-views.component.html',
  styleUrl: './product-views.component.css'
})
export class ProductViewsComponent {

  products:Product[]=[];
  filteredProducts: any[]=[];

  constructor(private productService:ProductsService, private router:Router){ }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next:(data: any)=>{
        this.products=data;
        console.log(data);
        
      },
      error:()=>{
        alert("failed to fetch notes due to server error"); 
      }
      
    });
  }
  searchEvent($eve: string) {
    if($eve==='' || !$eve)
      {
        this.productService.getProducts().subscribe(data =>{
          this.products=data;
        });
      }else{
        
        this.productService.getProducts().subscribe(data =>{
          this.products=data;
        });
        this.productService.getProducts().subscribe(data=>{
          this.products=data.filter( x => x.name?.toLowerCase().includes($eve.toLowerCase().trim()));
          console.log(this.products);
        })
      }
  
  }
  // onCategorySelected(category: string): void {
  //   if (category) {
  //     this.filteredProducts = this.products.filter(product => product.category === category);
  //   } else {
  //     this.filteredProducts = this.products;
  //   }
  // }

  
 
}
