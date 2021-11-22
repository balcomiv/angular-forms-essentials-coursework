import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InlineTextBasedInputsComponent } from './inline-text-based-inputs.component';

@NgModule({
  declarations: [InlineTextBasedInputsComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class AdvancedFormTypesModule {}
