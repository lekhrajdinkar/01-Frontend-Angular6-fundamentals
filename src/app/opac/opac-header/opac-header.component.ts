import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OpacLoginServices } from 'src/app/opac/opac.services';

@Component({
  selector: 'opac-header-two',
  templateUrl: './opac-header.component.html',
  styleUrls: ['./opac-header.component.css']
})
export class OpacHeaderComponentTwo implements OnInit {

  constructor(
    private router : Router,
    private currentActiveRoute : ActivatedRoute ,
    private loginSrv : OpacLoginServices
   ) { }

   isAuthenticated : boolean ;
   method : string ;

  ngOnInit() {
       this.loginSrv.authEvent1.subscribe(
      (data)=>{this.isAuthenticated = data ; console.log("is authenticated : " + data); }
    );
    
  }

  //if weuse this Logout button does not come.
  isAuthenticatedFn(){
    this.loginSrv.isAuthenticated();
  }

  // switchtoRegister(){
  //   this.method = "signup"
  // }

  // switchtoSignip(){
  //   this.method = "signin"
  // }

}
