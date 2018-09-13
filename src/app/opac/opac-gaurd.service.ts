import { CanActivate, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { OpacLoginServices } from "./opac.services";

@Injectable()
export class  opacGaurd implements CanActivate {

    constructor(private loginSrv : OpacLoginServices){}

    canActivate(route : ActivatedRouteSnapshot , state : RouterStateSnapshot){
        return this.loginSrv.isAuthenticated();
    }
    //canActivate :[opacGaurd],

}