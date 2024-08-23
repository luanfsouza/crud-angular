import { delay, first, take, tap } from 'rxjs';

import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly API = '/assets/cou3rses.json';
  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Course[]>(this.API).pipe(
      //vai pegar apenas a primeira informação, no caso o json de courses e encerar
      // take(1),
      first(),
      delay(2000),
      //tap((courses) => console.log(courses))
    );
  }
}
