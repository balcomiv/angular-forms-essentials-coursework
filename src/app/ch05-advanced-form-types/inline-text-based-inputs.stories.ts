import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { InlineTextBasedInputsComponent } from './inline-text-based-inputs.component';

export default {
  title: 'CH 05 / Advanced Form Types / Inline Text Based Inputs',
  component: InlineTextBasedInputsComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [],
    }),
  ],
  parameters: {
    // controls: { hideNoControlsWarning: true },
    // controls: { disabled: true },
    options: {
      showPanel: false,
    },
  },
} as Meta<InlineTextBasedInputsComponent>;

const template: Story<InlineTextBasedInputsComponent> = (
  args: InlineTextBasedInputsComponent
) => ({
  component: InlineTextBasedInputsComponent,
  props: {
    args,
  },
});

export const basic: Story<InlineTextBasedInputsComponent> = template.bind({});
basic.args = {};
basic.parameters = {
  // options: {
  //   showPanel: false,
  // },
};
