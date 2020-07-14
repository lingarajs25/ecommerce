import { Component } from '@angular/core';
import { ProductSevice} from './app.service';
import{Router} from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'onlinestore';
  constructor(public appService: ProductSevice, public router : Router) {

     

  }

  categories = ['mobiles', 'cameras', 'laptops', 'footwear'];
  getCategories(cat)
  {
    this.router.navigate(['/categories', cat])
  }

  logout(){
  this.appService.username='';
  this.appService.addedProducts = [];
  this.router.navigate(['']);
  }
}
