import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-inline-text-based-inputs',
  template: `
    <form [formGroup]="form">
      <label for="name">Name (type="text")</label>
      <input id="name" type="text" />

      <label for="color">Color (type="color")</label>
      <input id="color" type="color" />

      <label for="password">Password (type="password")</label>
      <input id="password" type="password" />

      <label for="age">Age (type="number")</label>
      <input id="age" type="number" />

      <label for="date">Date (type="date")</label>
      <input id="date" type="date" />
    </form>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InlineTextBasedInputsComponent implements OnInit {
  form = new FormGroup({});

  constructor() {}

  ngOnInit(): void {}
}
