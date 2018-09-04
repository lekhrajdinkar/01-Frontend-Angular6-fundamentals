import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Account } from '../../model/Account.model';
import { LogService } from '../../services/opac.service.log';
import { AccountService } from '../../services/opac.service.account';

@Component({
  selector: 'opac-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LogService]
})
export class AccountComponent implements OnInit {

  constructor(private l: LogService, private acctSrv: AccountService) { }
  //constructor(private l : LogService ) { } 

  accts: Account[] = [];

  ngOnInit() {
    this.accts = this.acctSrv.accts;
  }

}
