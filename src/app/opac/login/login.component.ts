import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import * as fb from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(
    private router : Router,
    private currentActiveRoute : ActivatedRoute 
   ) { }

   method : string ;

  ngOnInit() {  
   this.method = this.currentActiveRoute.snapshot.params['method'] ;
   console.log("current method : "+this.method);
  }

  switch(){
    this.method = "signin"
  }
  onSignUp(form : NgForm){
    const email = form.value.username;
    const password = form.value.password;
    console.log(email + " | " +password);

    fb.auth().createUserWithEmailAndPassword(email,password).catch
    (
      (error) => {alert(error);}
    );    
  }

  onSignIn(form : NgForm){
    const email = form.value.username;
    const password = form.value.password;
    console.log(email + " | " +password);

    fb.auth().signInWithEmailAndPassword(email,password)
    .then(
      (response) => {alert(response);}
    )
    .catch(
      (error) => {alert(error);}
    );    
  }

}
