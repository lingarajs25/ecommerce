import {Injectable, EventEmitter} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import{} from 'rxjs';

@Injectable({
    providedIn : 'root'
})

export class ProductSevice{

    loadingData = true;
    productDetails;
    username;
    addedProducts = [];
    searchTerm = '';
    totalAmount = 0;
    totals ;
    
    constructor(public http : HttpClient)
    {
        this.http.get('../assets/product.json').subscribe((data)=>{
            this.productDetails = data;
            this.loadingData = false;
        })

    }
    
}