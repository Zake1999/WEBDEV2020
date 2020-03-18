import { Injectable } from '@angular/core';
import { categories } from './categoryproducts';
import { Observable, of } from 'rxjs';
import {Product} from './Product';
import {Category} from './Category';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {
  constructor() { }
  getCategories(): Observable<Category[]> {
    return of(categories);
  }
  getCategory(id: number): Observable<Category> {
    return of(categories[id]);
  }
  // getProducts(id: number): Observable<Product[]>{
  //   return of(categories[id].products);
  // }
  getProduct(id: number, id2: number): Observable<Product>{
    return of(categories[id].products[id2 - 1]);
  }
}
