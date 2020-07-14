import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import{ProductSevice} from '../app.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  cat;
  categoryProduct=[];

  constructor(public route : ActivatedRoute, public appService: ProductSevice) {
    this.route.paramMap.subscribe((data)=>{
      
      this.categoryProduct = [];
      this.cat = data.get('cat');
      this.appService.productDetails.forEach((product) =>{

        if(product.category == this.cat){
          this.categoryProduct.push(product);
          console.log(this.categoryProduct)
        }

      });
      console.log(this.categoryProduct)
    })
   }
  ngOnInit() {
  }

}
