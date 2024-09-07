import * as Factory from 'factory.ts';

import { type ButtonComponentProps } from '../button-component';

export const ButtonComponentFactory =
  Factory.Sync.makeFactory<ButtonComponentProps>({
    ariaLabel: 'aria-label',
  });
