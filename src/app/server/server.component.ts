import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles :[`.online {color : white}`]
})
export class ServerComponent implements OnInit {

  constructor() { 
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline' ;
  }

  ngOnInit() {
  }

  //
  serverId: number = 10;
  serverName : string ; //fetching name from servers component, need to pass it to server component. c 2 c data passing.
  serverStatus: string = 'offline';

  getServerStatusColor() {
    return this.serverStatus === 'online' ? 'green' : 'red' ;
  }

  getServerStatus() {
    return this.serverStatus ;
  }

  
getServerS

}
