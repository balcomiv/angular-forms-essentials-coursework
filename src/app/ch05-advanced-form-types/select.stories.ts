import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { AdvancedFormTypesModule } from './advanced-form-types.module';
import { SelectComponent } from './select.component';

export default {
  title: 'CH 05 / Advanced Form Types / Select',
  component: SelectComponent,
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
} as Meta<SelectComponent>;

const template: Story<SelectComponent> = (args: SelectComponent) => ({
  component: SelectComponent,
  props: {
    args,
  },
});

export const select: Story<SelectComponent> = template.bind({});
select.args = {};
