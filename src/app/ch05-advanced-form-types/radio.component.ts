import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio',
  template: ` works `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
