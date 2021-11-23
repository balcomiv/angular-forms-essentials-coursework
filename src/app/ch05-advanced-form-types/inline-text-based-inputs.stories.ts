import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { AdvancedFormTypesModule } from './advanced-form-types.module';
import { InlineTextBasedInputsComponent } from './inline-text-based-inputs.component';

export default {
  title: 'CH 05 / Advanced Form Types / Inline Text Based Inputs',
  component: InlineTextBasedInputsComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [AdvancedFormTypesModule],
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

export const inlineTextBasedInputs: Story<InlineTextBasedInputsComponent> = template.bind(
  {}
);
inlineTextBasedInputs.args = {};
inlineTextBasedInputs.parameters = {
  // options: {
  //   showPanel: false,
  // },
};
