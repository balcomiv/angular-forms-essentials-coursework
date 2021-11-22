import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomValidationExampleComponent } from './custom-validation-example.component';

@NgModule({
  declarations: [CustomValidationExampleComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [CustomValidationExampleComponent],
})
export class CustomFormValidationModule {}
