import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Account } from '../../model/Account.model';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

  constructor() { }

  @Output() newAcct  = new EventEmitter<Account>();

  ngOnInit() {
  }

  a : Account;

  onCreateAccount(accountnu : string , accountabbr : string , accountName : string , status : boolean){
    console.log("1. Emit newAcct event ")  
    //accountnu,accountabbr,accountName, status
    this.newAcct.emit(new Account(accountabbr,accountnu,accountName,status));
  }
}
