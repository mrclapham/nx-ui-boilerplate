import React, { type FC, type ReactNode } from 'react';

export type ButtonComponentProps = {
  ariaLabel?: string;
  children?: ReactNode;
  onClick?: () => void;
};

export const ButtonComponent: FC<ButtonComponentProps> = ({
  ariaLabel,
  children,
  onClick,
}) => {

  return (
    <button aria-label={ariaLabel} onClick={onClick}>
      {children}
    </button>
  );
};