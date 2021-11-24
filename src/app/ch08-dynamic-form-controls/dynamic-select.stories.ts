import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { DynamicFormControlsModule } from './dynamic-form-controls.module';
import { DynamicSelectComponent } from './dynamic-select.component';

export default {
  title: 'CH 08 / Dynamic Form Controls / Select',
  component: DynamicSelectComponent,
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
} as Meta<DynamicSelectComponent>;

const template: Story<DynamicSelectComponent> = (
  args: DynamicSelectComponent
) => ({
  component: DynamicSelectComponent,
  props: {
    args,
  },
});

export const select: Story<DynamicSelectComponent> = template.bind({});
select.args = {};
