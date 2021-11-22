import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { passwordValidator } from './validators';

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

      <button type="submit">Submit</button>
    </form>

    <pre>{{ password?.errors | json }}</pre>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomValidationExampleComponent {
  form: FormGroup;

  get password(): AbstractControl | null {
    return this.form.get('password');
  }

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      password: ['', [Validators.minLength(6), passwordValidator]],
    });
  }

  onSubmit(): void {
    console.log('Submit: ', this.form);
  }
}
