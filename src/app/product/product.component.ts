import { Component, Input , OnInit} from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  @Input()

  product:Product={};

  constructor() { }

  ngOnInit(): void {}
  
}
