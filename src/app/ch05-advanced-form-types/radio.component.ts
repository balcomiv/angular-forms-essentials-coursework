import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-radio',
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <span class="label">Region (type="radio")</span>

      <!-- 
        On each input radio type, we use the formControlName with the same shared FormControl property.
        We set the name attribute to associate the radios as a single group to toggle. Lastly, we set the value
        attribute for Angular to set the FormControl value.
        Angular smoothly works out of the box with all HTML input types. In a later chapter, we will cover
        how to create custom Angular components that can bind to form controls as custom inputs
      -->
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

  onSubmit(): void {
    console.log('Submit: ', this.form.value);
  }
}
