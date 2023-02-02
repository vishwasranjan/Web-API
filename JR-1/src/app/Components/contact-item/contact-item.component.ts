import { Component, OnInit,Input,Output ,EventEmitter} from '@angular/core';
import { Users } from 'src/app/Models/users';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent implements OnInit {
  show:boolean=false;
  uid?:number=0;

  constructor() {
    
   }
  
  @Input()
  con?:Users;
  showCourses(){
    if(this.show){this.show=false;}
    else{
      this.show=true;
    }
    console.log(this.con?.userId);
    this.uid=this.con?.userId;
  
    //this.show=true;
    //alert("clicked");
  }

 

  ngOnInit(): void {
    
  }

}
