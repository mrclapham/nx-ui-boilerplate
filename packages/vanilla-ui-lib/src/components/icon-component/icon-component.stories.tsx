import { type Meta, type StoryObj } from '@storybook/react';

import { IconComponent, IconNames } from './icon-component';
import { iconComponentFactory } from './test-factory/icon-component-factory';

const meta: Meta<typeof IconComponent> = {
  component: IconComponent,
  title: 'Components/atoms/iconComponent',
  tags: ['autodocs'],
  argTypes: {
    ariaLabel: { control: 'text' },
    icon: { control: 'select', options: Object.values(IconNames)  },
  },
};

export default meta;
type Story = StoryObj<typeof IconComponent>;

export const Large: Story = {
  args: iconComponentFactory.build({
    ariaLabel: 'IconComponent – Large',
    icon: IconNames.ARROW_LEFT,
  }),
};

export const Medium: Story = {
  args: iconComponentFactory.build({
    ariaLabel: 'IconComponent – Medium',
  }),
};

export const Small: Story = {
  args: iconComponentFactory.build({
    ariaLabel: 'IconComponent – Small',
  }),
};
