import * as fb from 'firebase';
import { Injectable, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class OpacLoginServices {

    constructor(
        private router: Router,
        private currentActiveRoute: ActivatedRoute) { }

        authenticated : boolean = false ;
        method : string ;
        token : String ;

        @Output() authEvent1 = new EventEmitter<boolean>();

    //getToken -- pass it as query param 'auth' in fb REST call.
    getToken() 
    {
        fb.auth().currentUser.getIdToken()
        .then(
            (token : string)=>{this.token = token ; console.log("Token : " + token)}
        )

        return this.token ;
    }

    //sign in 
    signin(email: string, password: string) {
        fb.auth().signInWithEmailAndPassword(email, password)
            .then(
                (response) => {
                    alert("SuccessFul Login");
                    this.authenticated = true;
                    this.authEvent1.emit(this.authenticated);
                    this.router.navigate(["eop-op"]);
                    console.log(response);

                    //Get the token on first request.
                    //in our own server, we need to write code to generate JWT token manually.
                    fb.auth().currentUser.getIdToken()
                    .then(
                        (token : string)=>{this.token = token ; console.log("Token : " + token)}
                    )
                   
                }
            )
            .catch(
                (error) => { alert(error); this.authenticated = true; }
            );
    }

    // sign up
    signUp(email: string, password: string) {
        fb.auth().createUserWithEmailAndPassword(email, password)
            .then(
                (response) => { alert("Successful signup"); } 
            )
            .catch(
                (error) => { alert(error); }
            );
    }

    isAuthenticated(){         
         if (this.token != null)console.log("AUTHENTICATED...");
         return this.token != null ;
    }

    logout(){
        console.log("LOGOUT");
        this.token = null ;
        this.router.navigate(["login/signin"]);
    }
}