import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { matchingInputsValidator, passwordValidator } from './validators';

@Component({
  selector: 'app-custom-validation-example',
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <label for="password">Password</label>
      <input type="password" id="password" formControlName="password" />

      <ng-container *ngIf="password?.touched">
        <div *ngIf="password?.hasError('minlength')" class="error">
          Password must be at least six characters long.
        </div>
        <div *ngIf="password?.hasError('invalidPassword')" class="error">
          Passwords must container at least one uppercase character and one
          number
        </div>
      </ng-container>

      <label for="confirm">Confirm Password</label>
      <input type="confirm" id="confirm" formControlName="confirm" />

      <div *ngIf="passwordsDoNotMatch" class="error">Passwords must match.</div>

      <button type="submit">Submit</button>
    </form>

    <pre>{{ password?.errors | json }}</pre>

    <pre>{{ form.errors | json }}</pre>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomValidationExampleComponent {
  form: FormGroup;

  get password(): AbstractControl | null {
    return this.form.get('password');
  }

  get passwordsDoNotMatch(): boolean {
    return (
      this.form.errors &&
      this.form.errors.mismatch &&
      this.form.controls.confirm.touched
    );
  }

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group(
      {
        password: ['', [Validators.minLength(6), passwordValidator]],
        confirm: ['', Validators.required],
      },
      {
        validator: matchingInputsValidator('password', 'confirm'),
      }
    );
  }

  onSubmit(): void {
    console.log('Submit: ', this.form);
  }
}
