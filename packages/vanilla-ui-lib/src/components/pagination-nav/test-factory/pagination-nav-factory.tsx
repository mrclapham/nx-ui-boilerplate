import * as Factory from 'factory.ts';

import { type PaginationNavComponentProps } from '../pagination-nav';
import { Sizes } from '../../component-enums/sizes';


export const PaginationNavComponentFactory =
  Factory.Sync.makeFactory<PaginationNavComponentProps>({
    size: Sizes.LARGE,
    initialMax: 100,
    initialMin: 0,
    initialCurrent: 1,
    length: 10,
    title: 'PaginationNavComponent',
  });


/*
export type PaginationNavComponentProps = {
  size?: SizesType;
  initialMin: number;
  initialMax: number;
  initialCurrent: number;
  length: number;
  title: string;
  className?: string;
  ariaLabel?: string;
};
*/
  
