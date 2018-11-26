import { Component } from '@angular/core';
import { Response } from '@angular/http';

import { ServerService } from './server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appName = this.serverService.getAppName();
  
  //Array to store Server List
  servers = [
    { name: 'Testserver', capacity: 10, id: this.generateId()},
    { name: 'Liveserver', capacity: 100, id: this.generateId()}
  ];

  constructor(private serverService: ServerService) {}

  //============================

  // 1. Save new servefr on array.
  onAddServer(name: string) { this.servers.push({name: name,capacity: 50,id: this.generateId()});}

  // 2. Make REST call to store server array on backend.
  onSave() {
    this.serverService.storeServers(this.servers)
      .subscribe(
        (response: Response) => console.log(response),
        (error) => console.log(error)
      );
  }

  // 3. Get SERVER from backend - REST Get
  onGet() {
    this.serverService.getServers()
      .subscribe(
        (servers: any[]) => this.servers = servers,
        (error) => console.log(error)
      );
  }
  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}
