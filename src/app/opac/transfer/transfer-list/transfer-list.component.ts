import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'opac-transfer-list',
  templateUrl: './transfer-list.component.html',
  styleUrls: ['./transfer-list.component.css']
})
export class TransferListComponent implements OnInit {

  constructor(
    private router : Router,
    private currentActiveRoute : ActivatedRoute 
   ) { }

   transferId : string;

  ngOnInit()
   { 
    //this.currentActiveRoute.snapshot.params['id'];
    this.transferId = this.currentActiveRoute.snapshot.params['id'];
    console.log("trasnfer id : "+ this.transferId);

    this.currentActiveRoute.params.subscribe(
      (params : Params ) => {this.transferId = params['id']}
    );
   }



}
