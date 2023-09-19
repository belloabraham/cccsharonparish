import type { Meta, StoryObj } from '@storybook/angular';
import { PhoneNumberComponent } from './phone-number.component';

const meta: Meta<PhoneNumberComponent> = {
  component: PhoneNumberComponent,
  title: 'Form/Input',
};
export default meta;
type Story = StoryObj<PhoneNumberComponent>;

export const Phone: Story = {
  args: {},
};
