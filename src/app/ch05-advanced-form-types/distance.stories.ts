import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { AdvancedFormTypesModule } from './advanced-form-types.module';
import { DistanceComponent } from './distance.component';

export default {
  title: 'CH 05 / Advanced Form Types / Distance',
  component: DistanceComponent,
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
} as Meta<DistanceComponent>;

const template: Story<DistanceComponent> = (args: DistanceComponent) => ({
  component: DistanceComponent,
  props: {
    args,
  },
});

export const distance: Story<DistanceComponent> = template.bind({});
distance.args = {};
