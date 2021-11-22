import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { AdvancedFormTypesModule } from './advanced-form-types.module';
import { RadioComponent } from './radio.component';

export default {
  title: 'CH 05 / Advanced Form Types / Radio',
  component: RadioComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [AdvancedFormTypesModule],
    }),
  ],
  parameters: {
    // controls: { hideNoControlsWarning: true },
    controls: { disabled: true },
  },
} as Meta<RadioComponent>;

const template: Story<RadioComponent> = (args: RadioComponent) => ({
  component: RadioComponent,
  props: {
    args,
  },
});

export const radio: Story<RadioComponent> = template.bind({});
radio.args = {};
