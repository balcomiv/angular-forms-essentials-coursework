import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <input type="checkbox" id="checkbox" formControlName="subscribe" />
      <label for="checkbox">Checkbox</label>
    </form>

    <pre>{{ form.value | json }}</pre>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent {
  form = this.formBuilder.group({
    subscribe: [true],
  });

  constructor(private formBuilder: FormBuilder) {}

  onSubmit(): void {
    console.log(this.form.value);
  }
}
