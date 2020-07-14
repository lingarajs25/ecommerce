import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import{ProductSevice} from '../app.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id;
  selectedProduct;

  constructor(public route : ActivatedRoute, public appService: ProductSevice) {
    this.route.paramMap.subscribe((data)=>{
      this.id = data.get('id');
      this.appService.productDetails.forEach(  (product) =>{
        if(product.id == this.id){
          this.selectedProduct = product;
          console.log(this.selectedProduct)
        }
      });
    })
   }

  ngOnInit() {
  }

}
