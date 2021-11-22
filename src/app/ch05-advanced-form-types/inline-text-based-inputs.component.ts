import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-inline-text-based-inputs',
  template: `
    <form [formGroup]="form">
      <label for="name">Name</label>
      <input id="name" type="text" />

      <label for="color">Color</label>
      <input id="color" type="color" />

      <label for="password">Password</label>
      <input id="password" type="password" />

      <label for="age">Age</label>
      <input id="age" type="number" />

      <label for="date">Date</label>
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
