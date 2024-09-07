import { type Meta, type StoryObj } from '@storybook/react';

import { ButtonComponent } from './button-component';
import { ButtonComponentFactory } from './test-factory/button-component-factory';

const meta: Meta<typeof ButtonComponent> = {
  component: ButtonComponent,
  title: 'Components/atoms/buttonComponent',
  tags: ['autodocs'],
  argTypes: {
    ariaLabel: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonComponent>;

export const Large: Story = {
  args: ButtonComponentFactory.build({
    ariaLabel: 'ButtonComponent – Large',
  }),
};

export const Medium: Story = {
  args: ButtonComponentFactory.build({
    ariaLabel: 'ButtonComponent – Medium',
  }),
};

export const Small: Story = {
  args: ButtonComponentFactory.build({
    ariaLabel: 'ButtonComponent – Small',
  }),
};
