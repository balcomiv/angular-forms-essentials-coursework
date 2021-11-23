import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-distance',
  template: `
    <form [formGroup]="form">
      <label for="distance">Distance</label>
      <input
        formControlName="distance"
        type="range"
        id="distance"
        min="0"
        max="100"
      />
    </form>
    <pre>{{ this.form.value | json }}</pre>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DistanceComponent {
  form = new FormGroup({
    distance: new FormControl(10),
  });
}
