/* eslint-disable @typescript-eslint/no-unused-vars */
import { type FC } from 'react';
import styles from './pagination-button-component.module.css';
import { Sizes, SizesType } from '../component-enums/sizes';

export type PaginationButtonProps = {
  size?: SizesType;
  value: number;
  selected?: boolean;
  ariaLabel?: string;
};

export const PaginationButton: FC<PaginationButtonProps> = ({
  size = Sizes.MEDIUM,
  ariaLabel,
  selected = false,
  value = 0,
}) => {
  const sizeClasses = {
    [Sizes.LARGE]: 'pagination-button--large',
    [Sizes.MEDIUM]: 'pagination-button--medium',
    [Sizes.SMALL]: 'pagination-button--small',
  };

  return (
    <button
      className={`${styles['pagination-button']} ${styles[sizeClasses[size]]} ${  selected ? styles['pagination-button--selected'] : ''}`}
      aria-label={ariaLabel || value.toString()}>
      {value}
    </button>
  );
};
