import { Component, Input, OnInit } from '@angular/core';
import { ExamDetails } from 'src/app/Models/exam-details';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {

  constructor() { }
  @Input()
  cou?:ExamDetails;

  ngOnInit(): void {
  }

}
