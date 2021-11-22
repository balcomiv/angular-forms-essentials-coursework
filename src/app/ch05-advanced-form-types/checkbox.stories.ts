import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { AdvancedFormTypesModule } from './advanced-form-types.module';
import { CheckboxComponent } from './checkbox.component';

export default {
  title: 'CH 05 / Advanced Form Types / Checkbox',
  component: CheckboxComponent,
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
} as Meta<CheckboxComponent>;

const template: Story<CheckboxComponent> = (args: CheckboxComponent) => ({
  component: CheckboxComponent,
  props: {
    args,
  },
});

export const checkbox: Story<CheckboxComponent> = template.bind({});
checkbox.args = {};
