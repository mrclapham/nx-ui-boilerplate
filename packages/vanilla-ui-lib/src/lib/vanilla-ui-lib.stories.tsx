import type { Meta, StoryObj } from '@storybook/react';
import { VanillaUiLib } from './vanilla-ui-lib';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof VanillaUiLib> = {
  component: VanillaUiLib,
  title: 'VanillaUiLib',
};
export default meta;
type Story = StoryObj<typeof VanillaUiLib>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to VanillaUiLib!/gi)).toBeTruthy();
  },
};
