import * as Factory from 'factory.ts';

import { type PaginationComponentProps } from '../pagination-component';
import { Sizes } from '../../component-enums/sizes';

export const PaginationComponentFactory =
  Factory.Sync.makeFactory<PaginationComponentProps>({
    size: Sizes.LARGE,
    ariaLabel: 'aria-label',
    min: 0,
    max: 100,
    current: 1,
    length: 10,
  });
