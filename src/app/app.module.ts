import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{NotfoundComponent} from 'not.found.component'
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import {Routes, RouterModule} from '@angular/router'
import {HttpClientModule} from '@angular/common/http';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CategoriesComponent } from './categories/categories.component';
import { LoginComponent } from './login/login.component';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SearchPipe} from './search.pipe';
import { from } from 'rxjs';
import { CartComponent } from './cart/cart.component';


const routes : Routes = [
  {path : '', component : ProductsComponent},
  {path : 'product/:id', component : ProductDetailsComponent},
  {path :'categories/:cat', component: CategoriesComponent},
  {path: 'login', component : LoginComponent},
  {path: 'cart' , component : CartComponent},
  {path : '**', component : NotfoundComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailsComponent, NotfoundComponent, CategoriesComponent, LoginComponent,SearchPipe, CartComponent
  ],
  imports: [
    BrowserModule ,RouterModule.forRoot(routes), HttpClientModule, FormsModule, ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
