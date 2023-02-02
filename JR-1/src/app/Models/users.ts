export class Users {
    userId:number=0;
    userName:string="";
    email:string="";
    phone:number=0;

    constructor(userId:number,userName:string,email:string,phone:number)
    {
        this.userId=userId;
        this.userName=userName;
        this.email=email;
        this.phone=phone;
    }
}
