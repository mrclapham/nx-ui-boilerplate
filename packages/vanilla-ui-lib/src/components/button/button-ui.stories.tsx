import type { Meta, StoryObj } from '@storybook/react';
import { ButtonUi } from './button-ui';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ButtonUi> = {
  component: ButtonUi,
  title: 'ButtonUi',
};
export default meta;
type Story = StoryObj<typeof ButtonUi>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to ButtonUi!/gi)).toBeTruthy();
  },
};
