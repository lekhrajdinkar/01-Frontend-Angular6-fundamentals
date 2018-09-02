export class User
{
    name : string;
    initials : string;
    role : string;
    loc : string;
    isactive : boolean ;

    constructor( 
        name : string,
        initials : string,
        role : string,
        loc : string,
        isactive : boolean
    ){
    this.name = name ;
    this.initials = initials ;
   this.role =  role ;
    this.loc = loc ;
    this.isactive = isactive  ;
    }
}