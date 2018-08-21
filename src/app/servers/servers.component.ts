import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit 
{
  //All Server list
  servers = [];

  //Add new sderver
  serverCreationStatus = 'No server was created!';
  serverName : string;
  serverCreated = false;  

  onCreateServer() {
    this.serverCreationStatus = 'Server was created with Server Name :' + this.serverName;
    console.log(this.serverName);
    this.servers.push(this.serverName);
    this.serverName = "";
    this.serverCreated = true;
  }
  
  ngOnInit() {  }
 
//---------------------------------------------------------
  //not in use. just to explain 2 way binding.
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  
  //Enable Add server button after 2 second
  allowNewServer = false;
  constructor() {
    setTimeout(() => {      this.allowNewServer = true;    }, 5000);
  }

}
