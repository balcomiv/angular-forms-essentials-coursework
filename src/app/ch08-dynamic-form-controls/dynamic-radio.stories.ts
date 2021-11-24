import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { DynamicFormControlsModule } from './dynamic-form-controls.module';
import { DynamicRadioComponent } from './dynamic-radio.component';

export default {
  title: 'CH 08 / Dynamic Form Controls / Radio',
  component: DynamicRadioComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [DynamicFormControlsModule],
    }),
  ],
  parameters: {
    // controls: { hideNoControlsWarning: true },
    controls: { disabled: true },
  },
} as Meta<DynamicRadioComponent>;

const template: Story<DynamicRadioComponent> = (
  args: DynamicRadioComponent
) => ({
  component: DynamicRadioComponent,
  props: {
    args,
  },
});

export const radio: Story<DynamicRadioComponent> = template.bind({});
radio.args = {};
