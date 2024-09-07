import React, { type FC, useMemo } from 'react';
import { paginationFactory } from './pagination-utils/pagination-utils';
import { PaginationButton } from '../pagination-button/pagination-button-component';

import { Sizes, type SizesType } from '../component-enums/sizes';

import styles from './pagination-component.module.css';

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
    <div role="navigation" aria-label={ariaLabel} className={styles.pagination}>
      {pageNumbers.map(({value, selected}) => (
        <div key={value} className={`p-2 ${selected ? 'font-bold' : ''}`}>
          <PaginationButton value={value} size={size} selected={selected} />
        </div>
      ))}
    </div>
  );
};

export default PaginationComponent;