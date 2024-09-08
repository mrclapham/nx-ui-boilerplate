import { type FC, type ReactNode } from 'react';
// import stylesBasic from '../pagination-button-component.module.css';
import styles from '../pagination-button/pagination-button-component.module.css'

export type ButtonComponentProps = {
  ariaLabel?: string;
  children?: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
};

export const ButtonComponent: FC<ButtonComponentProps> = ({
  ariaLabel,
  children,
  disabled,
  onClick,
}) => {

  return (
    <button
      aria-label={ariaLabel}
      onClick={onClick}
      className={`${styles['pagination-button']} ${disabled ? styles['pagination-button--disabled'] : ''}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};