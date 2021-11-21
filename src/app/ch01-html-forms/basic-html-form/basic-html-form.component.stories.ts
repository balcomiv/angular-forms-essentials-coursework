// import {
//     MatFormFieldDefaultOptions,
//     MAT_FORM_FIELD_DEFAULT_OPTIONS
// } from '@angular/material/form-field';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { BasicHtmlFormComponent } from './basic-html-form.component';

export default {
  title: `Test / App Component`,
  component: BasicHtmlFormComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
  parameters: {
    // controls: { hideNoControlsWarning: true },
    controls: { disabled: true },
  },
} as Meta<BasicHtmlFormComponent>;

const Template: Story<BasicHtmlFormComponent> = (
  args: BasicHtmlFormComponent
) => ({
  component: BasicHtmlFormComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
// Primary.parameters = {
//   controls: { hideNoControlsWarning: true },
// };
