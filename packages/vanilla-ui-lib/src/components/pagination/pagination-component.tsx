import React, { type FC, useMemo } from 'react';
import { paginationFactory } from './pagination-utils/pagination-utils';
import { PaginationButton } from '../pagination-button/pagination-button-component';

import { Sizes, type SizesType } from '../component-enums/sizes';

export type PaginationComponentProps = {
  size?: SizesType;
  min: number;
  max: number;
  current: number;
  length: number;
  ariaLabel?: string;
};

export const PaginationComponent: FC<PaginationComponentProps> = ({
  size = Sizes.LARGE,
  min = 0,
  max = 100,
  current = 0,
  length = 10,
  ariaLabel,
}) => {
  const pageNumbers = useMemo(() => {
    return paginationFactory(min, max, current, length);
  }, [min, max, current, length]);

  return (
    <div role="navigation" aria-label={ariaLabel}>
      {pageNumbers.map(({value, selected}) => (
        <div key={value} className={`p-2 ${selected ? 'font-bold' : ''}`}>
          <PaginationButton  value={value} size={size} />
        </div>
      ))}
    </div>
  );
};

export default PaginationComponent;