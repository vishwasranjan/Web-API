import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ExamDetails } from 'src/app/Models/exam-details';
import { AuthorizationService } from 'src/app/Service/authorization.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  //uid: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  course:ExamDetails[]=[];

  constructor(private courseservice:AuthorizationService) {
    
   }
   @Input()
   x?:number;
   


  ngOnInit(): void {
    console.log("value of x"+this.x);
    this.courseservice.getAllCoursesById(this.x).subscribe(data=>{this.course=data;})
    
  }

}
