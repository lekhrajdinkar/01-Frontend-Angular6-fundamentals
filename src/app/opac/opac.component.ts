import { Component, OnInit } from '@angular/core';
import { Account } from './model/Account.model';

@Component({
  selector: 'app-opac',
  templateUrl: './opac.component.html',
  styleUrls: ['./opac.component.css']
})
export class OpacComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //--------------- 1. Accounts --------------------------------
  //1.1. Store Accounts in array.
  accts : Account[] = [
    new Account("11000007", "NPF", "TEST ACCOUNT 1", true),
    new Account("11000005", "NWF", "TEST ACCOUNT 2", true),
    new Account("11000003", "BGN", "TEST ACCOUNT 3", true)
  ];

  //1.2. Add new Account
  createNewAccount(a : Account){
    //this.accts.push(new Account(4,accountnu,accountabbr,accountName, status));
    console.log("2. newAcct event caught and Pushing event data - Account in array")
    this.accts.push(a);
  }

  //1.3. Change account status
  statusChanged(a: Account){
    console.log("---status changes---");
  }


  //----------------- 2. ASSETS ----------------------

}
