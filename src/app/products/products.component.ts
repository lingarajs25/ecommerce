import { Component } from '@angular/core';
import{Router} from '@angular/router';
import{ProductSevice} from '../app.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  {

 

  constructor(public appService: ProductSevice, public router : Router) {

     

   }

   productDetails(id)
   {

    this.router.navigate(['/product', id])


   }

   addToCart(p){
     this.appService.addedProducts.push(p);
   }

   inCart(p){
      return this.appService.addedProducts.indexOf(p) > -1
   }

   removeFromCart(p){
     this.appService.addedProducts.splice(this.appService.addedProducts.indexOf(p), 1)
   }

   ngOnDestroy(){
     this.appService.searchTerm = '';
   }

  }
  


