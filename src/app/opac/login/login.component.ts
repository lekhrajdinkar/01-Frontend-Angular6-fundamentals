import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import * as fb from 'firebase';
import { OpacLoginServices } from '../opac.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(
    private router : Router,
    private currentActiveRoute : ActivatedRoute ,
    private loginSrv : OpacLoginServices
   ) { }

   method : string ;

  ngOnInit() { 
    this.method = this.loginSrv.method ;
   this.method = this.currentActiveRoute.snapshot.params['method'] ;
   console.log("current method : "+this.method);
  }

  switchtoRegister(){
    this.method = "signup";
  }

  switchtoSignip(){
    this.method = "signin";
  }

  onSignUp(form : NgForm){
    const email = form.value.username;
    const password = form.value.password;
    console.log("Sign up with : " + email + " | " +password);

    this.loginSrv.signUp(email,password);
  }

  onSignIn(form : NgForm){
    const email = form.value.username;
    const password = form.value.password;
    console.log("Sign in with : " +email + " | " +password);

    this.loginSrv.signin(email,password); 
  }

}
