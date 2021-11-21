import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-validation-example',
  template: `
    <label for="email">Email</label>
    <input [formControl]="email" id="email" type="email" />

    <div *ngIf="email.touched && email.hasError('required')" class="error">
      email is required
    </div>

    <div *ngIf="email.touched && email.hasError('email')" class="error">
      invalid email address
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputValidationExampleComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor() {}

  ngOnInit(): void {}
}
