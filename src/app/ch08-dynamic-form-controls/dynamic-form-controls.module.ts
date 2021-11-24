import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicSelectComponent } from './dynamic-select.component';

@NgModule({
  declarations: [DynamicSelectComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [DynamicSelectComponent],
})
export class DynamicFormControlsModule {}
