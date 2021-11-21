// import {
//     MatFormFieldDefaultOptions,
//     MAT_FORM_FIELD_DEFAULT_OPTIONS
// } from '@angular/material/form-field';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { AppComponent } from './app.component';

//   const appearance: MatFormFieldDefaultOptions = {
//     appearance: 'outline',
//     floatLabel: 'always',
//   };

export default {
  title: `Test / App Component`,
  component: AppComponent,
  decorators: [
    moduleMetadata({
      imports: [],
      // providers: [
      //   {
      //     provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      //     useValue: appearance,
      //   },
      // ],
    }),
  ],
  parameters: {
    // controls: { hideNoControlsWarning: true },
    // controls: { disabled: true },
  },
} as Meta<AppComponent>;

const Template: Story<AppComponent> = (args: AppComponent) => ({
  component: AppComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
// Primary.parameters = {
//   controls: { hideNoControlsWarning: true },
// };
