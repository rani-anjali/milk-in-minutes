import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-filtered-display',
  templateUrl: './filtered-display.component.html',
  styleUrl: './filtered-display.component.css'
})
export class FilteredDisplayComponent {

  products:Product[]=[];
  filteredProducts: any[]=[];

  constructor(private productService:ProductsService){ }

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

  onCategorySelected(category: string): void {
    if (category) {
      this.filteredProducts = this.products.filter(product => product.category === category);
    } else {
      this.filteredProducts = this.products;
    }
  }
}
