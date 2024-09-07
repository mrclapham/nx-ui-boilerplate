export const Sizes = {
    LARGE: 'large',
    MEDIUM: 'medium',
    SMALL: 'small',
} as const;
  
export type SizesType = (typeof Sizes)[keyof typeof Sizes];