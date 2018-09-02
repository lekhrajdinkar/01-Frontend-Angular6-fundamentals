import { Account } from "../model/Account.model";
import { LogService } from "./opac.service.log";
import { Injectable } from "@angular/core";

@Injectable()
export  class AccountService{

    constructor(private l : LogService){}
    //constructor(){}

 //1.1. Store Accounts in array.
  accts : Account[] = [
    new Account("11000007", "NPF", "TEST ACCOUNT 1", true),
    new Account("11000005", "NWF", "TEST ACCOUNT 2", true),
    new Account("11000003", "BGN", "TEST ACCOUNT 3", true)
  ];

  //1.2. Add new Account
  createNewAccount(a : Account){
    console.log("AcctSrv : Create New Account")
    this.accts.push(a);
    console.log(this.accts);
  }

  //1.3. Change account status
  statusChanged(a: Account){
    console.log(this.accts);    
    console.log("--- status change event caught--- \n No need update Account array here. it automaticallu updated");
    this.l.logInfo("--- status change event caught--- \n No need update Account array here. it automaticallu updated");
  }


}