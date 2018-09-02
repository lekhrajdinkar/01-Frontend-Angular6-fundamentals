import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { User } from '../../model/User.model';
import { OpacAdminService } from '../../services/opac.service.admin';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent  implements OnInit {
  
  //@Input() 
  users: User[];
  //@Output() userSetToInactive = new EventEmitter<string>();

  constructor(private srv: OpacAdminService) { }
  ngOnInit(): void {
    this.users = this.srv.usersActive;
  }

  onSetToInactive(u : User, i : number) {
    this.srv.updateInActiveUser(u,i);
    //this.userSetToInactive.emit(initial);
  }
}
