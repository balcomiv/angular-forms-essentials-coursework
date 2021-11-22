import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckboxComponent } from './checkbox.component';
import { DistanceComponent } from './distance.component';
import { InlineTextBasedInputsComponent } from './inline-text-based-inputs.component';
import { RadioComponent } from './radio.component';
import { SelectComponent } from './select.component';

@NgModule({
  declarations: [
    InlineTextBasedInputsComponent,
    CheckboxComponent,
    SelectComponent,
    DistanceComponent,
    RadioComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    InlineTextBasedInputsComponent,
    CheckboxComponent,
    SelectComponent,
    DistanceComponent,
    RadioComponent,
  ],
})
export class AdvancedFormTypesModule {}
