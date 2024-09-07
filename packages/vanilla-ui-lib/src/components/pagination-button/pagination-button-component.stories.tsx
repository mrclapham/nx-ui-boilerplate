import { type Meta, type StoryObj } from '@storybook/react';

import { PaginationButton } from './pagination-button-component';
import { PaginationButtonFactory } from './test-factory/pagination-button-component-factory';
import { Sizes } from '../component-enums/sizes';


const meta: Meta<typeof PaginationButton> = {
  component: PaginationButton,
  title: 'Components/atoms/paginationButtonComponent',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: Object.values(Sizes),
    },
    selected: { control: 'boolean' },
    value: { control: 'number' },
    ariaLabel: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof PaginationButton>;

export const Large: Story = {
  args: PaginationButtonFactory.build({
    size: Sizes.LARGE,
    value: 1,
  }),
};

export const Medium: Story = {
  args: PaginationButtonFactory.build({
    size: Sizes.MEDIUM,
    value: 2,
  }),
};

export const Small: Story = {
  args: PaginationButtonFactory.build({
    size: Sizes.SMALL,
    value: 3,
  }),
};
