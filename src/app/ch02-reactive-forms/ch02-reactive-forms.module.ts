import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputValidationExampleComponent } from './input-validation-example.component';

@NgModule({
  declarations: [InputValidationExampleComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [InputValidationExampleComponent],
})
export class Ch02ReactiveFormsModule {}
