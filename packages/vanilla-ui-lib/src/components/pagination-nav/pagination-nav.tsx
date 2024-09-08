import React, { useReducer } from 'react';
import { Sizes, SizesType } from '../component-enums/sizes';
import { IconComponent } from '../icon-component/icon-component';
import { IconNames } from '../icon-component/icon-component';
import { ButtonComponent } from '../button-component/button-component';
import { PaginationComponent } from '../pagination/pagination-component';
import styles from './pagination-nav.module.css';

export type PaginationNavComponentProps = {
  size?: SizesType;
  initialMin: number;
  initialMax: number;
  initialCurrent: number;
  length: number;
  title: string;
  className?: string;
  ariaLabel?: string;
  onPageChange?: (value: number) => void;
};

type State = {
  min: number;
  max: number;
  current: number;
  initialMin: number;
  initialMax: number;
  length: number;
};

type Action =
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'EXTEND_RANGE' }
  | { type: 'SHRINK_RANGE' }
  | { type: 'SET_CURRENT'; payload: number };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'INCREMENT':
      if (state.current < state.max) {
        return { ...state, current: state.current + 1 };
      }
      return state;
    case 'DECREMENT':
      if (state.current > state.initialMin) {
        return { ...state, current: state.current - 1 };
      }
      return state;
    case 'SET_CURRENT':
      return { ...state, current: action.payload };
    case 'EXTEND_RANGE':
      return {
        ...state,
        min: state.min + 1,
        current: state.current + 1,
      } ;
    case 'SHRINK_RANGE':
      if (state.min > state.initialMin) {
        return {
          ...state,
          min: state.min - 1,
          current: state.current - 1,
        };
      }
      return state;
    default:
      return state;
  }
};

export const PaginationNavComponent: React.FC<PaginationNavComponentProps> = ({
  size = Sizes.LARGE,
  title,
  initialMin = 1,
  initialMax = 25,
  initialCurrent = 1,
  length = 20,
  ariaLabel,
  onPageChange,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    min: initialMin,
    max: initialMax, 
    current: initialCurrent,
    initialMin: initialMin,
    initialMax: initialMax,
    length: length,
  });

  const forward = () => {
    if (state.current - state.min === state.length-1) {
      dispatch({ type: 'EXTEND_RANGE' });
    } else {
      dispatch({ type: 'INCREMENT' });
    }
  };

  const backward = () => {
    if (state.current === state.min ) {
      dispatch({ type: 'SHRINK_RANGE' });
    } else {
      dispatch({ type: 'DECREMENT' });
    }
  };
  
  const onChange = (value: number) => {
    dispatch({ type: 'SET_CURRENT', payload: value });
    onPageChange && onPageChange(value);
  }

  return (
    <div className={styles['pagination-nav']} data-testid="pagination-nav-component" aria-label={ariaLabel || title}>
      <ButtonComponent onClick={backward} ariaLabel='Go to previous page' disabled={state.current === state.initialMin}>
        <IconComponent icon={IconNames.ARROW_LEFT} ariaLabel="Previous" />
      </ButtonComponent>
      <PaginationComponent max={state.max} min={state.min} current={state.current} length={length} size={size} onChange={onChange} />
      <ButtonComponent onClick={forward} ariaLabel='Go to next page' disabled={state.current === state.max}>
        <IconComponent icon={IconNames.ARROW_RIGHT} ariaLabel="Next" />
      </ButtonComponent>
    </div>
  );
};