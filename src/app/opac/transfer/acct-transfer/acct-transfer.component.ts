import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'opac-acct-transfer',
  templateUrl: './acct-transfer.component.html',
  styleUrls: ['./acct-transfer.component.css']
})
export class AcctTransferComponent implements OnInit {

  devtip: boolean = true;
  toggleDevtip() { this.devtip = !this.devtip; }
  constructor(
    private router: Router,
    private currentActiveRoute: ActivatedRoute
  ) { }

  ngOnInit() { }

  routeTransferList() {
    this.router.navigate(
      ['../transfer-list'],
      { relativeTo: this.currentActiveRoute } // ActivatedRoute is complex js object and keeps lots of metadata.
    );
  }

  //1. Unlike RouterLink, router onject does not know currently loaded route and
  //only know the component it sits. eop-t/transfer-list and /eop-t/transfer-list are same here.
  //this.router.navigate(['/eop-t/transfer-list'])
  routeTransferListRelatively(id : string) {
    this.router.navigate(
      ['../transfer-list',id],
      { relativeTo: this.currentActiveRoute } // ActivatedRoute is complex js object and keeps lots of metadata.
    );
  }

  //2. Add related path now
  // eop-t/transfer-list and /eop-t/transfer-list are different here. 
  routeTransferListAbsolute(id : string) {
    this.router.navigate(
     // ['../transfer-list', id] // It wont work, provide absolute path
      ['/eop-t/transfer-list',id] // It  work, its absolute path

      //, {relativeTo : this.currentActiveRoute} // ActivatedRoute is complex js object and keeps lots of metadata.
    );
  }


  routeTransfer(id: string) {
    //3. show transfer id for a specific Transfer.
    console.log("transfer id" + id);
    //this.router.navigate(  ['/eop-transfer/transfer-list/'+ id],  {relativeTo : this.currentActiveRoute} ) ;
    this.router.navigate(['../transfer-list/', id], { relativeTo: this.currentActiveRoute });
  }


  createServer(id: string) {
    this.router.navigate(
      ['/eop-transfer/servers', id, 'create'],

      {
        queryParams: { serverName: 'x200775' },
        fragment: 'creating'
      });
  }

}
