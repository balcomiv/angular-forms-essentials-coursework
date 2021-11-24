import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicRadioComponent } from './dynamic-radio.component';
import { DynamicSelectComponent } from './dynamic-select.component';

@NgModule({
  declarations: [DynamicSelectComponent, DynamicRadioComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [DynamicSelectComponent, DynamicRadioComponent],
})
export class DynamicFormControlsModule {}
