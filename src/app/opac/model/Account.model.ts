export class Account{
    acct_id : number = 1;
    acct_abbr : string ;
    acct_number : string;
    acct_name : string;
    is_active : boolean;

    
    constructor( acct_abbr : string,        acct_number : string,        acct_name : string,        is_active : boolean){
        this.acct_abbr = acct_abbr;
        this.acct_id = this.acct_id + 3;
        this.acct_name = acct_name;
        this.acct_number = acct_number;
        this.is_active = is_active;
    }
}