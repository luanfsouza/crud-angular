import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    ErrorDialogComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [ErrorDialogComponent]
})
export class SharedModule { }
