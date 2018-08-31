import { Component } from '@angular/core';
import { Account } from './opac/model/Account.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng6';

  viewName : string = "recipe";

  displayView(viewName : string){
    this.viewName = viewName;
  }

  //Accounts
  accts : Account[] = [
    new Account(1,"11000007", "NPF", "TEST ACCOUNT 1", true),
    new Account(2,"11000005", "NWF", "TEST ACCOUNT 2", true),
    new Account(3,"11000003", "BGN", "TEST ACCOUNT 3", true)
  ];

  statusChanged(a: Account){
    console.log("---status changes---");
  }

  onCreateAccount(accountName, accountnu,accountabbr,status){
    this.accts.push(new Account(4,accountnu,accountabbr,accountName, status));
  }
}
