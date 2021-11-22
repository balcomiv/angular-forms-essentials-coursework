import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-select',
  template: `
    <p>
      select works!
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
