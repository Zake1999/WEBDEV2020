import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { products } from './products';
import { Product } from './product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

   getProducts(): Observable<Product[]> {
     return of(products);
   }
   getProduct(id: number): Observable<Product> {
      return of(products.find(product => product.id === id));
   }
  constructor() { }
}
