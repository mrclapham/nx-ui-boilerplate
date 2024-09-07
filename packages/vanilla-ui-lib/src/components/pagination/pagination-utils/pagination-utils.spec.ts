import { paginationFactory } from './pagination-utils';

describe('paginationFactory', () => { 
    describe("paginationFactory", () => { 


        const scenarios = [
            {input:{min: 2, max: 100, current: 3, length: 10},
            values:[
            { value: 2, selected: false },
            { value: 3, selected: true },
            { value: 4, selected: false },
            { value: 5, selected: false },
            { value: 6, selected: false },
            { value: 7, selected: false },
            { value: 8, selected: false },
            { value: 9, selected: false },
            { value: 10, selected: false },
            { value: 11, selected: false },
                ]
            },
            { input: { min: 1, max: 100, current: 1, length: 5 },
            values: [
            { value: 1, selected: true },
            { value: 2, selected: false },
            { value: 3, selected: false },
            { value: 4, selected: false },
            { value: 5, selected: false },
                ]
            },
            { input: { min: 5, max: 10, current: 6, length: 15 },
            values: [
            { value: 5, selected: false },
            { value: 6, selected: true },
            { value: 7, selected: false },
            { value: 8, selected: false },
            { value: 9, selected: false },
            { value: 10, selected: false },
                ]
            },
        ];

        it.each(scenarios)('should return %p', ({ input, values }) => {
            expect(paginationFactory(input.min, input.max, input.current, input.length)).toEqual(values);
        });
    });
});