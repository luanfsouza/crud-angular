import { CommonModule } from '@angular/common';
import { CoursesRoutingModule } from './courses-routing.module';
import { ErrorDialogComponent } from '../shared/components/error-dialog/error-dialog.component';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, CoursesRoutingModule, MatTableModule, SharedModule],
})
export class CoursesModule {}
