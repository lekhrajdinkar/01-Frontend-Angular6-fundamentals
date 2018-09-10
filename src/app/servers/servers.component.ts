import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  serverId : string;
  serverCreated = false;  

  onCreateServer() {
    this.serverCreationStatus = 'Server was created with Server Name :' + this.serverName;
    console.log(this.serverName);
    this.servers.push(this.serverName);
    this.serverName = "";
    this.serverCreated = true;
  }
  
   
//---------------------------------------------------------
  //not in use. just to explain 2 way binding.
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  
  //Enable Add server button after 2 second
  allowNewServer = false;

  constructor( private currentActiveRoute : ActivatedRoute )//active route
   {
    setTimeout(() => {      this.allowNewServer = true;    }, 5000);//ignore this code of l5.
  }

  ngOnInit() { 
    this.serverId = this.currentActiveRoute.snapshot.params['serverId'] //fetch Query
    if (this.serverId != null) this.servers.push(this.serverName);
   }


}
