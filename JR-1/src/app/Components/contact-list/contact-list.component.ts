import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/Models/users';
import { AuthorizationService } from 'src/app/Service/authorization.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  users:Users[]=[];
  constructor(private userService:AuthorizationService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(data=>{this.users=data;
    // console.log(data);
  })
  }

}
