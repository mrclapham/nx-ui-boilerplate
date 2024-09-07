import * as Factory from 'factory.ts';

import { type IconComponentProps } from '../icon-component';

export const iconComponentFactory =
  Factory.Sync.makeFactory<IconComponentProps>({
    ariaLabel: 'aria-label',
  });
