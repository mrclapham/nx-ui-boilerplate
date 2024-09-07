import { type FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const IconNames = {
  ARROW_RIGHT: 'arrow-right',
  ARROW_LEFT: 'arrow-left',
} as const;

export type IconNameType = typeof IconNames[keyof typeof IconNames];

export type IconComponentProps = {
  ariaLabel?: string;
  icon?: IconNameType;
};

export const IconComponent: FC<IconComponentProps> = ({
  ariaLabel,
  icon = IconNames.ARROW_RIGHT,
}) => {
  return (
    <div aria-label={ariaLabel} data-testid='icon-component'>
      <FontAwesomeIcon icon={["fas", icon]} />
    </div>
  );
};