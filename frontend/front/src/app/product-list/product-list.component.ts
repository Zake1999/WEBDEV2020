import { Component,OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:Product[];

  constructor( private route: ActivatedRoute,private productService : ProductService,
  private location : Location){}

  ngOnInit() {
      this.getProducts();
    }

  getProducts(): void {
    this.productService.getProducts()
        .subscribe(products => this.products = products);
  }
  goBack(): void {
    this.location.back();
  }
}

