import * as Factory from 'factory.ts';

import { type PaginationButtonProps } from '../pagination-button-component';
import { Sizes } from '../../component-enums/sizes';

export const PaginationButtonFactory =
  Factory.Sync.makeFactory<PaginationButtonProps>({
    size: Sizes.LARGE,
    ariaLabel: 'aria-label',
    value:  1
  });
