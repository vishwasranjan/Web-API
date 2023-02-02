import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  show:boolean=false;
  showUserlist(){
    this.show=true;
    console.log(this.show);
  }
  ngOnInit(): void {
  }

}