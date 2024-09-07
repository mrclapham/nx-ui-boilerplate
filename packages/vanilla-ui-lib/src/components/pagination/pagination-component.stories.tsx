import { type Meta, type StoryObj } from '@storybook/react';

import { PaginationComponent } from './pagination-component';
import { PaginationComponentFactory } from './test-factory/pagination-component-factory';
import { Sizes } from '../component-enums/sizes';



const meta: Meta<typeof PaginationComponent> = {
  component: PaginationComponent,
  title: 'Components/atoms/PaginationComponent',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: Object.values(Sizes),
    },
    min: { control: 'number' },
    max: { control: 'number' },
    current: { control: 'number' },
    length: { control: 'number' },
    ariaLabel: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof PaginationComponent>;

export const LargePagination: Story = {
  args: PaginationComponentFactory.build({
    size: Sizes.LARGE,
    min: 0,
    max: 100,
    current: 1,
    length: 10,
  }),
};

export const MediumPagination: Story = {
  args: PaginationComponentFactory.build({
    size: Sizes.MEDIUM,
    min: 0,
    max: 100,
    current: 1,
    length: 10,
  }),
};

export const SmallPagination: Story = {
  args: PaginationComponentFactory.build({
    size: Sizes.SMALL,
    min: 0,
    max: 100,
    current: 1,
    length: 10,
  }),
};