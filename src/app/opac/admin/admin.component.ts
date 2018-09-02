import { Component, OnInit } from '@angular/core';
import { OpacAdminService } from '../services/opac.service.admin';
import { User } from '../model/User.model';

@Component({
  selector: 'opac-admin',
  templateUrl: './admin.component.html',
  providers : [OpacAdminService]
})
export class OpacAdminComponent implements OnInit{

  activeUsers : User[];
  inactiveUsers : User[];

  constructor(private srv: OpacAdminService) { }

  ngOnInit(): void {
   this.activeUsers = this.srv.usersActive;
   this.inactiveUsers = this.srv.usersInActive;
  } 
/*
  onSetToInactive(u : User , i : number) {
    this.inactiveUsers.push(u);
    this.activeUsers.splice(i);
  }

  onSetToActive(u : User , i : number) {
    this.activeUsers.push(u);
    this.inactiveUsers.splice(i);
  }
  */
}
