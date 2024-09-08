import { type FC, useMemo, useEffect, useRef } from 'react';
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
  min = 1,
  max = 100,
  current = 1,
  length = 10,
  ariaLabel,
  onChange,
}) => {
  const previousCurrentRef = useRef(current);

  useEffect(() => {
    if (current !== previousCurrentRef.current && onChange) {
      onChange(current);
      previousCurrentRef.current = current;
    }
  }, [current, onChange]);

  const pageNumbers = useMemo(() => {
    return paginationFactory(min, max, current, length);
  }, [min, max, current, length]);

  return (
    <div role="navigation" aria-label={ariaLabel} className={styles.pagination}>
      {pageNumbers.map(({value, selected}) => (
        <div key={value} className={`${selected ? 'font-bold' : ''}`}>
          <PaginationButton 
            value={value} 
            size={size} 
            selected={selected} 
            onClick={onChange}
          />
        </div>
      ))}
    </div>
  );
};

export default PaginationComponent;