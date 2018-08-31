import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Account } from '../../model/Account.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

 
  @Input() a : Account ;
  @Output() statusChanged = new EventEmitter<Account>();

  constructor() { }

  ngOnInit() {
  }

  onSetTo(status: string) {
    if (status === 'active') this.a.is_active = true;
    else this.a.is_active = false;

    this.statusChanged.emit(this.a);
    console.log('Account status changed, new status: ' + status);
  }

}
