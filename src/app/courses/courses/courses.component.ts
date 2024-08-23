import { Component, OnInit } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [AppMaterialModule,],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent implements OnInit {
  courses$: Observable<Course[]>;
  displayedColumns = ['name', 'category'];

  //array vindo do services/courses
  constructor(private coursesService: CoursesService) {
    this.courses$ = this.coursesService.list().pipe(
      catchError(error => {
        console.log(error)
        // return Observable<Course[]>
        return of([])
      })
    );

    // this.coursesService.list().subscribe(courses => this.courses = courses);
  }
  ngOnInit(): void {}
}
