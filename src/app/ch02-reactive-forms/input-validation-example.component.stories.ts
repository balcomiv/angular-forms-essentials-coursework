// import {
//     MatFormFieldDefaultOptions,
//     MAT_FORM_FIELD_DEFAULT_OPTIONS
// } from '@angular/material/form-field';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { Ch02ReactiveFormsModule } from './ch02-reactive-forms.module';
import { InputValidationExampleComponent } from './input-validation-example.component';

export default {
  title: `CH 02 / Reactive Forms`,
  component: InputValidationExampleComponent,
  decorators: [
    moduleMetadata({
      imports: [Ch02ReactiveFormsModule],
    }),
  ],
  parameters: {
    // controls: { hideNoControlsWarning: true },
    controls: { disabled: true },
  },
} as Meta<InputValidationExampleComponent>;

const Template: Story<InputValidationExampleComponent> = (
  args: InputValidationExampleComponent
) => ({
  component: InputValidationExampleComponent,
  props: args,
});

export const reactiveForms = Template.bind({});
reactiveForms.args = {};
// reactiveForms.parameters = {
//   controls: { hideNoControlsWarning: true },
// };
