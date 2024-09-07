import { type FC, useMemo, useState, useEffect } from 'react';
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
  onChange?: (value: number) => void;
};


export const PaginationComponent: FC<PaginationComponentProps> = ({
  size = Sizes.LARGE,
  min = 0,
  max = 100,
  current = 0,
  length = 10,
  ariaLabel,
  onChange,
}) => {

  const [currentSelection, setCurrentSelection] = useState(current);

  useEffect(() => {
    setCurrentSelection(current);
  } , [current]);


  const pageNumbers = useMemo(() => {
    onChange && onChange(currentSelection);
    return paginationFactory(min, max, currentSelection, length);
  }, [min, max, currentSelection, length, onChange]);

  const onButtonClick = (value: number): void => {
    setCurrentSelection(value);
  }

  return (
    <div role="navigation" aria-label={ariaLabel} className={styles.pagination}>
      {pageNumbers.map(({value, selected}) => (
        <div key={value} className={`${selected ? 'font-bold' : ''}`}>
          <PaginationButton value={value} size={size} selected={selected} onClick={onButtonClick}/>
        </div>
      ))}
    </div>
  );
};

export default PaginationComponent;