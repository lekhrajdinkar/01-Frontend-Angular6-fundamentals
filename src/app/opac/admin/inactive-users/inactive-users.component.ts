import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { User } from '../../model/User.model';
import { OpacAdminService } from '../../services/opac.service.admin';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  
  users: User[];
  //@Output() userSetToActive = new EventEmitter<string>();

  constructor(private srv: OpacAdminService) { }

  ngOnInit(): void {
    this.users = this.srv.usersInActive;
  }

    onSetToActive(u : User, i : number) {
    this.srv.updateActiveUser(u,i);
    //this.userSetToInactive.emit(initial);
  }
}
