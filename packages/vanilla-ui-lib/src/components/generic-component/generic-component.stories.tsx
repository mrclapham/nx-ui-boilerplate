import { type Meta, type StoryObj } from '@storybook/react';

import { GenericComponent, HeadingSizes } from './generic-component';
import { genericComponentFactory } from './test-factory/generic-component-factory';

const meta: Meta<typeof GenericComponent> = {
  component: GenericComponent,
  title: 'Components/atoms/genericComponent',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: Object.values(HeadingSizes),
    },
    title: { control: 'text' },
    className: { control: 'text' },
    ariaLabel: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof GenericComponent>;

export const Large: Story = {
  args: genericComponentFactory.build({
    size: HeadingSizes.LARGE,
    title: 'GenericComponent – Large',
  }),
};

export const Medium: Story = {
  args: genericComponentFactory.build({
    size: HeadingSizes.MEDIUM,
    title: 'GenericComponent – Medium',
  }),
};

export const Small: Story = {
  args: genericComponentFactory.build({
    size: HeadingSizes.SMALL,
    title: 'GenericComponent – Small',
  }),
};
