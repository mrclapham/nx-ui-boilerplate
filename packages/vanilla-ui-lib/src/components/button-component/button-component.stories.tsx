import React from 'react';
import { type Meta, type StoryObj } from '@storybook/react';

import { ButtonComponent } from './button-component';
import { ButtonComponentFactory } from './test-factory/button-component-factory';

import { Sizes } from '../component-enums/sizes';

// Define a simple child component
const ChildComponent: React.FC = () => <span>Child Content</span>;

const meta: Meta<typeof ButtonComponent> = {
  component: ButtonComponent,
  title: 'Components/atoms/buttonComponent',
  tags: ['autodocs'],
  argTypes: {
    ariaLabel: { control: 'text' },
    children: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonComponent>;

export const Large: Story = {
  args: {
    ...ButtonComponentFactory.build({
      ariaLabel: 'ButtonComponent – Large',
      size: Sizes.LARGE,
    }),
    children: <ChildComponent />,
  },
};

export const Medium: Story = {
  args: {
    ...ButtonComponentFactory.build({
      ariaLabel: 'ButtonComponent – Medium',
      size: Sizes.MEDIUM,
    }),
    children: <ChildComponent />,
  },
};

export const Small: Story = {
  args: {
    ...ButtonComponentFactory.build({
      ariaLabel: 'ButtonComponent – Small',
      size: Sizes.SMALL,

    }),
    children: <ChildComponent />,
  },
};