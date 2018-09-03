import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { User } from '../../model/User.model';
import { OpacAdminService } from '../../services/opac.service.admin';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent  implements OnInit {
  
 // size: number ;
  users: User[];
  //@Output() userSetToInactive = new EventEmitter<string>();

  constructor(private srv: OpacAdminService) { }
  ngOnInit(): void {
    this.users = this.srv.usersActive;
    //this.size=this.users.length;
    //console.log("size : " + this.size);
  }

  onSetToInactive(u : User, i : number) {
    this.srv.updateInActiveUser(u,i);
    //console.log("size : " + this.size);
    //this.userSetToInactive.emit(initial);
  }
}
