import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-radio',
  template: `
    <form [formGroup]="form">
      <span class="label">Region (type="radio")</span>
      <label>
        <input
          formControlName="radio"
          type="radio"
          name="region"
          value="north-america"
        />
        North America
      </label>
      <label>
        <input
          formControlName="radio"
          type="radio"
          name="region"
          value="south-america"
        />
        South America
      </label>
      <label>
        <input
          formControlName="radio"
          type="radio"
          name="region"
          value="europe"
        />
        Europe
      </label>
    </form>

    <pre>{{ form.value | json }}</pre>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      radio: ['south-america'],
    });
  }

  ngOnInit(): void {}
}
