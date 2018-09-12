import { Component, OnInit } from '@angular/core';
import { Account } from './opac/model/Account.model';
import * as fb from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    fb.initializeApp({
      apiKey: "AIzaSyCrWAxURtx1aszO9xaa4-nfzAcZIdtLisI",
      authDomain: "firstdemoaapp.firebaseapp.com"})
  }

  title = 'ng6';

  viewName : string = "eop";

  displayView(viewName : string){
    this.viewName = viewName;
  }  
}
