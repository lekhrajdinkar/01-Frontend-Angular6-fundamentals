import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Account } from '../../model/Account.model';
import { LogService } from '../../services/opac.service.log';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LogService] 
})
export class AccountComponent implements OnInit {
  constructor(private l : LogService) { }

  ngOnInit() {
  }

  @Input() a : Account ; //it holds single acount item.

  //if status changed from UI, delegate it to parent opac component to update Accouny array by emitting below event with account data.
  @Output() statusChanged = new EventEmitter<Account>();

  onSetTo(status: string) {
    if (status === 'active') this.a.is_active = true;
    else this.a.is_active = false;

    this.statusChanged.emit(this.a);
    
    console.log('Account status changed, new status: ' + status);
    this.l.logInfo('Account status changed, new status: ' + status);
  }

}
