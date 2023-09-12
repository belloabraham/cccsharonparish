import type { Meta, StoryObj } from '@storybook/angular';
import { IconButtonComponent } from './icon-button.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<IconButtonComponent> = {
  component: IconButtonComponent,
  title: 'IconButtonComponent',
};
export default meta;
type Story = StoryObj<IconButtonComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/icon-button works!/gi)).toBeTruthy();
  },
};
