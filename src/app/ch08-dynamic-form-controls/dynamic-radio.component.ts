import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Order, OrderService } from './order.service';

@Component({
  selector: 'app-dynamic-radio',
  template: `
    <form
      [formGroup]="form"
      *ngIf="orders | async as orders; else loading"
      (ngSubmit)="onSubmit()"
    >
      <span class="label">Radio Orders</span>
      <label *ngFor="let order of orders">
        <input
          formControlName="radioOrder"
          type="radio"
          name="radioOrder"
          [value]="order.id"
        />
        {{ order.name }}
      </label>

      <button>Submit</button>
    </form>

    <pre>{{ form.value | json }}</pre>

    <ng-template #loading>Loading Orders...</ng-template>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicRadioComponent implements OnInit {
  form: FormGroup;

  orders: Observable<Order[]>;

  constructor(
    private formBuilder: FormBuilder,
    private orderService: OrderService
  ) {
    this.form = this.formBuilder.group({
      radioOrder: [],
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
      tap((orders) => this.form.patchValue({ radioOrder: orders[0].id }))
    );
  }

  ngOnInit(): void {}

  onSubmit(): void {
    console.log('radio order: ', this.form.value.radioOrder);
  }
}
