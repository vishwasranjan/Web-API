import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/Service/authorization.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 username="";
 password="";
 errmsg="";
 
  constructor(private auth:AuthorizationService,private router:Router) { }

  ngOnInit(): void {
  }
  
  login(){
    if(this.username.trim().length==0)
    {
      this.errmsg="Username is required";
      console.log("Username is reuired");
    }
    else if(this.password.trim().length==0){
      this.errmsg="Password is required";
      console.log("Password is reuired");
    }
    else{
      this.errmsg="";
      this.auth.login(this.username,this.password).subscribe(
        res=>{
          if(res)
          {
            console.log(res);
            this.router.navigate(['home'])
          }
          else{
            console.log(res);
            alert("Inavalid Credentails")
          }
        }
      )
    }
  }
  

}
