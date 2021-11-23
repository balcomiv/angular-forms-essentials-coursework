import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select',
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <!-- When setting the options of the select, we have to make sure to provide the value attribute for
          Angular to use and assign to the control value. Note that when using the value attribute the value
          returned always is a string type. In a later chapter, we will cover in detail how to create selects
          dynamically from async data.
      -->
      <select name="memory" id="memory" formControlName="memory">
        <option value="16">16 Gigabytes</option>
        <option value="32">32 Gigabytes</option>
        <option value="64">64 Gigabytes</option>
        <option value="128">128 Gigabytes</option>
      </select>
    </form>
    <pre>{{ form.value | json }}</pre>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent {
  form = new FormGroup({
    memory: new FormControl('32'),
  });

  constructor() {}

  onSubmit(): void {
    console.log('Submitted: ', this.form);
  }
}
