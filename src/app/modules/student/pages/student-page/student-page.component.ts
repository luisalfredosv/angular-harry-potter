import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css']
})
export class StudentPageComponent implements OnInit {

  constructor(private studentService: StudentService) { }

  listStudents$: Observable<any> = of([]);

  ngOnInit(): void {
    this.getStudents()
  }


  getStudents(): void {
    this.listStudents$ = this.studentService.getStudents$();
  }


}
