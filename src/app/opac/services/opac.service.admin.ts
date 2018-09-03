import { User } from "../model/User.model";

export class OpacAdminService{

    usersActive : User[] = [
        //new User('Lekhraj Dinkar', 'INYLBD','SSE','IRVINE',true),
        //new User('Arun Tawara', 'INYAVT','Tech Arch','IRVINE',true),
        //new User('Shrish Buradkar', 'INYSQB','SPM','IRVINE',true),
        //new User('Renuka Dhabadkar', 'INYRBD','Teach Lead','IRVINE',true),
        //new User('Vishnu', 'INYVDAK','Tech Arch','IRVINE',true),

        new User('user 1', 'INYLBD','SSE','IRVINE',true),
        new User('user 2', 'INYAVT','Tech Arch','IRVINE',true),
        new User('user 3', 'INYSQB','SPM','IRVINE',true),
        new User('user 4', 'INYRBD','Teach Lead','IRVINE',true),
        new User('user 5', 'INYVDAK','Tech Arch','IRVINE',true),
    ] ;

    usersInActive : User[] = [

        //new User('Kiran gade', 'INYKFG','TA','LA',false),
        //new User('Sagar gagpalliwar', 'INYSVG','TA','LA',false),
        new User('user 6', 'INYKFG','TA','LA',false),
        new User('user 7', 'INYSVG','TA','LA',false)
    ] ;

    updateActiveUser(u : User, i : number ){
        console.log("OpacAdminService : update Active User list with user ( " + i + ") : " + u );
        this.usersActive.push(u);
        this.usersInActive.splice(i,1);
    }

    updateInActiveUser(u : User , i : number){
        console.log("OpacAdminService : update In-Active User list with user ( " + i + ") : " + u );
        this.usersInActive.push(u);
        this.usersActive.splice(i,1);
    }

}