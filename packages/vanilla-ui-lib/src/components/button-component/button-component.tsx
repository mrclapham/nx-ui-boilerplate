import { type FC, type ReactNode } from 'react';
// import stylesBasic from '../pagination-button-component.module.css';
import styles from '../pagination-button/pagination-button-component.module.css'
import { Sizes, SizesType } from '../component-enums/sizes';

export type ButtonComponentProps = {
  ariaLabel?: string;
  size?: SizesType;
  children?: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
};

export const ButtonComponent: FC<ButtonComponentProps> = ({
  ariaLabel,
  size = Sizes.MEDIUM,
  children,
  disabled,
  onClick,
}) => {

  const sizeClasses = {
    [Sizes.LARGE]: 'pagination-button--large',
    [Sizes.MEDIUM]: 'pagination-button--medium',
    [Sizes.SMALL]: 'pagination-button--small',
  };

  return (
    <button
      aria-label={ariaLabel}
      onClick={onClick}
      className={`${styles['pagination-button']} ${disabled ? styles['pagination-button--disabled'] : ''} ${styles[sizeClasses[size]]}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};