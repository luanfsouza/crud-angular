import { Component, OnInit } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [AppMaterialModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent implements OnInit {
  courses$: Observable<Course[]>;
  displayedColumns = ['name', 'category'];
  

  //array vindo do services/courses
  constructor(private coursesService: CoursesService, public dialog: MatDialog) {
    this.courses$ = this.coursesService.list().pipe(
      catchError((error) => {
        this.onError("error ao carregar cursos.");
        // return Observable<Course[]>
        return of([]);
      })
    );

    // this.coursesService.list().subscribe(courses => this.courses = courses);
  }
  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: "",
    });
  }
  ngOnInit(): void {}
}
