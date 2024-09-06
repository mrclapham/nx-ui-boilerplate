import React, { type FC } from 'react';

export const HeadingSizes = {
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small',
} as const;

export type HeadingSizesType = (typeof HeadingSizes)[keyof typeof HeadingSizes];

export type GenericComponentProps = {
  size?: HeadingSizesType;
  title: string;
  className?: string;
  ariaLabel?: string;
};

export const GenericComponent: FC<GenericComponentProps> = ({
  size = HeadingSizes.LARGE,
  title,
  className = 'heading',
  ariaLabel,
}) => {
  const sizeClasses = {
    [HeadingSizes.LARGE]: 'text-3xl p-2',
    [HeadingSizes.MEDIUM]: 'text-2xl p-2',
    [HeadingSizes.SMALL]: 'text-xl p-2',
  };

  const classes = `font-bold ${sizeClasses[size]} ${className}`;

  return (
    <div className={classes} aria-label={ariaLabel || title}>
      {title}
    </div>
  );
};
