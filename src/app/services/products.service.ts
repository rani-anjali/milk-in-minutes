import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  product_url:string = "http://localhost:3000/products"

  constructor(private httpClient:HttpClient) {}

  getProducts():Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.product_url);
  }

  getProductById(id?:number):Observable<Product>{
    return this.httpClient.get<Product>(`${this.product_url}/${id}`);
  }
}
