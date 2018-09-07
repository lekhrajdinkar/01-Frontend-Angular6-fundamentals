import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { User } from "../model/User.model";

@Injectable()
export class AdminService{

    constructor(private http : Http) { }

    addNewUserSrv(u : User){
        //this is observable
        return this.http.post("https://ng6-firebase-b6db1.firebaseio.com/ng6/opac/users.json",u);
    }

    getUsersSrv(){
        //this is observable
        return this.http.get("https://ng6-firebase-b6db1.firebaseio.com/ng6/opac/users.json");
    }

}