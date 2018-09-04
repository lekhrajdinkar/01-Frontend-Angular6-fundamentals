import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Account } from '../../../model/Account.model';
import { LogService } from '../../../services/opac.service.log';
import { AccountService } from '../../../services/opac.service.account';

@Component({
  selector: 'opac-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {
  constructor(private l: LogService, private acctSrv: AccountService) { }

  ngOnInit() { }

  @Input() a: Account; //it holds single acount item.

  //if status changed from UI, delegate it to parent opac component to update Accouny array by emitting below event with account data.
  @Output() statusChanged = new EventEmitter<Account>();

  onSetTo(status: string) {
    if (status === 'active') this.a.is_active = true;
    else this.a.is_active = false;

    //1. way - by services
    this.acctSrv.statusChanged(this.a);
    this.acctSrv.acctSrvEvent1.emit(status);

    //2. way
    // this.statusChanged.emit(this.a);
    // this.l.logInfo('Account status changed, new status: ' + status);
  }
}
