import { Component, OnInit } from '@angular/core';
import{Router,RouterModule} from '@angular/router';
import {ProductSevice} from '../app.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 userName = '';
  passwordMached = false;
  constructor(public router : Router , public productService : ProductSevice) { }
  
  
  login(myForm){
    this.router.navigate(['']);
    this.productService.username = this.userName;
    console.log(myForm);
  }

  checkPasswords(pw,cpw){
      if(pw == cpw){
        this.passwordMached = true;
      } else {
        this.passwordMached = false;
      }
    }

  ngOnInit() {
  }

}
