import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-distance',
  template: `
    <p>
      distance works!
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DistanceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
