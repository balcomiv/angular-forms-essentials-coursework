import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-inline-text-based-inputs',
  template: `
    <form [formGroup]="form">
      <label for="name">Name (type="text")</label>
      <input formControlName="name" id="name" type="text" />

      <label for="color">Color (type="color")</label>
      <input formControlName="color" id="color" type="color" />

      <label for="password">Password (type="password")</label>
      <input formControlName="password" id="password" type="password" />

      <label for="age">Age (type="number")</label>
      <input formControlName="age" id="age" type="number" />

      <label for="date">Date (type="date")</label>
      <input formControlName="date" id="date" type="date" />
    </form>

    <pre>{{ form.value | json }}</pre>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InlineTextBasedInputsComponent implements OnInit {
  form = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: [''],
      color: ['#1ab725'],
      password: [''],
      age: [null],
      date: [null],
    });
  }

  ngOnInit(): void {}
}
