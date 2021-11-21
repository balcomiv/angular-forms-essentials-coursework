import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-basic-html-form',
  template: `
    <form>
      <label for="name">Name</label>
      <input id="name" type="text" [value]="initialValue" />
      <button type="submit">Submit</button>
    </form>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicHtmlFormComponent {
  initialValue = 'Hello World';

  onSubmit(event: unknown): void {
    console.log(event);
  }
}
