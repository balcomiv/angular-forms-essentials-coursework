// import {
//     MatFormFieldDefaultOptions,
//     MAT_FORM_FIELD_DEFAULT_OPTIONS
// } from '@angular/material/form-field';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { BasicHtmlFormComponent } from './basic-html-form.component';

export default {
  title: `CH 01 / Basic HTML Form`,
  component: BasicHtmlFormComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
  parameters: {
    // controls: { hideNoControlsWarning: true },
    controls: { disabled: true },
    options: {
      showPanel: true,
    },
  },
} as Meta<BasicHtmlFormComponent>;

const Template: Story<BasicHtmlFormComponent> = (
  args: BasicHtmlFormComponent
) => ({
  component: BasicHtmlFormComponent,
  props: args,
});

export const basicHTMLForm = Template.bind({});
basicHTMLForm.args = {};
// basicHTMLForm.parameters = {
//   controls: { hideNoControlsWarning: true },
// };
