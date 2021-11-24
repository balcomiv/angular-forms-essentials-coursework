import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Order, OrderService } from './order.service';

@Component({
  selector: 'app-dynamic-select',
  template: `
    <form
      [formGroup]="form"
      *ngIf="orders | async as orders; else loading"
      (ngSubmit)="onSubmit()"
    >
      <label for="selectOrder">Select Order</label>
      <select formControlName="selectOrder" id="orders">
        <option *ngFor="let order of orders; let i = index" [value]="order.id">
          {{ order.name }}
        </option>
      </select>

      <button>Submit</button>
    </form>

    <pre>{{ form.value | json }}</pre>

    <ng-template #loading> Loading User Data... </ng-template>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicSelectComponent {
  form: FormGroup;

  orders: Observable<Order[]>;

  constructor(
    private formBuilder: FormBuilder,
    private orderService: OrderService
  ) {
    this.form = this.formBuilder.group({
      selectOrder: [],
    });

    this.orders = this.orderService
      .loadOrders()
      .pipe(
        tap((orders) => this.form.patchValue({ selectOrder: orders[0].id }))
      );
  }

  onSubmit(): void {
    //  With selects and radios, the value is always returned as a string type
    console.log(
      `is number: ${typeof this.form.value.selectOrder === 'number'}`
    );
    console.log('select order: ', this.form.value.selectOrder);
  }
}
