import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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

  ngOnInit() { 
    
    this.transferId = this.currentActiveRoute.snapshot.params['id'];
    console.log("trasnfer id : "+ this.transferId);
   }



}
