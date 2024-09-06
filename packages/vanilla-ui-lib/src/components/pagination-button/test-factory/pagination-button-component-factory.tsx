import * as Factory from 'factory.ts';

import { type PaginationButtonProps, HeadingSizes } from '../pagination-button-component';

export const PaginationButtonFactory =
  Factory.Sync.makeFactory<PaginationButtonProps>({
    size: HeadingSizes.LARGE,
    ariaLabel: 'aria-label',
    value:  1
  });
