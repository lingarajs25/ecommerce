import {Component} from '@angular/core';
import {ProductSevice} from "../app.service";
import {Router} from '@angular/router';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
@Component({
    templateUrl: './cart.component.html'
})
export class CartComponent {
    totals: number = 0 ;
    quantity : number;
    cartForm: FormGroup;
    constructor(public productService: ProductSevice, public router: Router, public fb: FormBuilder) {
        
    }

    ngOnInit() {
        this.cartForm = this.fb.group({
            products: this.fb.array([])
        });   
        this.addProducts();
        let start = <FormArray>this.cartForm.controls['products'];
        start. controls.forEach((control) => {
            console.log(control.value.price + ' ' + control.value.quantity )
            this.totals = this.totals + (control.value.price * control.value.quantity );
            console.log(this.totals);
        });

        this.cartForm.valueChanges.subscribe((data) => {        
            console.log(data);
            let total = 0;    
            let all = <FormArray>this.cartForm.controls['products'];
            all.controls.forEach((control) => {
                console.log(control.value.price + ' ' + control.value.quantity )
                total = total + (control.value.price * control.value.quantity );
                console.log(this.totals);
            });
            this.totals = total;
        })     
    }

    addProducts() {
        if (this.productService.addedProducts.length > 0 ) {
            this.productService.addedProducts.forEach((product) => {
                let p = this.fb.group({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    img: product.img,
                    description: product.description,
                    quantity: 1
                });
                
                (this.cartForm.controls.products as FormArray).push(p);
            });
            console.log(this.cartForm);
        }
    }

    removeProduct(i, val) {      
        (this.cartForm.controls.products as FormArray).removeAt(i);
        this.productService.addedProducts.splice(i, 1);
    }

    
    get products () {
        return <FormArray>this.cartForm.get('products');
    }

    checkOut() {
        this.productService.totalAmount = this.totals;
        this.router.navigate(['/checkout']);
    }
    
}

