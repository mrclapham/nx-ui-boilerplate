export type pagination = { value: number, selected: boolean };

export const paginationFactory = (min: number, max: number, current: number, length: number):pagination[] => { 
    const actualLength = Math.min(length, max - min + 1 );
    const arr = new Array(actualLength).fill(min)
        .map((_, index) => ({ value: index + min , selected: index + min   === current }));
    return arr;
};