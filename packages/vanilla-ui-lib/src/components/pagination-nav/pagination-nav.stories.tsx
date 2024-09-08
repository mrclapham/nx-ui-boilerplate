import { type Meta, type StoryObj } from '@storybook/react';

import { PaginationNavComponent } from './pagination-nav';
import { PaginationNavComponentFactory } from './test-factory/pagination-nav-factory';
import { Sizes } from '../component-enums/sizes';

const meta: Meta<typeof PaginationNavComponent> = {
  component: PaginationNavComponent,
  title: 'Components/organisms/PaginationNavComponent',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: Object.values(Sizes),
    },
    title: { control: 'text' },
    className: { control: 'text' },
    ariaLabel: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof PaginationNavComponent>;

export const Large: Story = {
  args: PaginationNavComponentFactory.build({
    size: Sizes.LARGE,
    title: 'PaginationNavComponent – Large',
  }),
};

export const Medium: Story = {
  args: PaginationNavComponentFactory.build({
    size: Sizes.MEDIUM,
    title: 'PaginationNavComponent – Medium',
  }),
};

export const Small: Story = {
  args: PaginationNavComponentFactory.build({
    size: Sizes.SMALL,
    title: 'PaginationNavComponent – Small',
  }),
};
