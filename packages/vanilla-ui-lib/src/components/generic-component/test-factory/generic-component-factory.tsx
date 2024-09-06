import * as Factory from 'factory.ts';

import { type GenericComponentProps, HeadingSizes } from '../generic-component';

export const genericComponentFactory =
  Factory.Sync.makeFactory<GenericComponentProps>({
    size: HeadingSizes.LARGE,
    title: 'The Title',
    className: 'classname',
    ariaLabel: 'aria-label',
  });
