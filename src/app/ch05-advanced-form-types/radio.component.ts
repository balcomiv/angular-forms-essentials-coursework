import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-radio',
  template: `
    <p>
      radio works!
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RadioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
