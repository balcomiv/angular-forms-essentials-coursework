import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { CustomFormValidationModule } from './custom-form-validation.module';
import { CustomValidationExampleComponent } from './custom-validation-example.component';
export default {
  title: `CH 04 / Custom Form Validation`,
  component: CustomValidationExampleComponent,
  decorators: [
    moduleMetadata({
      imports: [CustomFormValidationModule],
    }),
  ],
  parameters: {
    // controls: { hideNoControlsWarning: true },
    controls: { disabled: true },
  },
} as Meta<CustomValidationExampleComponent>;

const Template: Story<CustomValidationExampleComponent> = (
  args: CustomValidationExampleComponent
) => ({
  component: CustomValidationExampleComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
