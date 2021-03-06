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

    this.orders = this.orderService.loadOrders().pipe(
      /*
        We can use the tap operator function for our use case. The tap operator allows us to “tap” into the
        stream of events. Every time the Observable emits a value the value runs through our tap operator.
        The tap operator allows us to handle side effects or changes that do not directly affect the value of
        the Observable. In our use case, our side effect is setting the form value but not changing the value
        in the Observable. Tap passes the original value unaltered onto the Observable.
        Now that we can tap into the value of our async user data we can update the form to have an initial
        value. To update the form we can use two different methods.
      */

      //  Side Effect -> Updating form value without changing/interfering with the stream
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
