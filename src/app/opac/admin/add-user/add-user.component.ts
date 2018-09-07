import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'opac-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private adminSrv : AdminService) { 
    //Subscribe to addNewUserSrv
    
  }

  //Subscribe to addNewUserSrv Obsrvble
addUser(name : string,initials : string,role : string,loc : string,status : boolean){
  this.adminSrv.addNewUserSrv({name : name,initials : initials,role : role,loc : loc,isactive : status})
  .subscribe(
    (response) => {console.log(response)},
    (error)=>{console.log(error)}
  );
}
  ngOnInit() {
  }

}
