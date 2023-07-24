import { 
    addZero, 
    formatDate, 
    formatMilliseconds,
    formatMillisecondsReverse,
    formatTime
} from '../../Utils/DataFormatter';

describe('Test Suite for the DataFormatter utility module', () => {
    it('tests the "formatDate" function', () => {
        /** Arrange */
        const data = '2023-04-19T13:55:49.549Z';

        /** Act */
        const response = formatDate(data);

        /** Assert */
        expect(response).toBe('2023-04-19 13:55:49:549');
    });

    it('tests the "formatTime" function', () => {
        /** Arrange */
        const data = new Date(1681912549549);

        /** Act */
        const response = formatTime(data);

        /** Assert */
        expect(response).toBe('13:55:49:549');
    });

    it.each([
        {unit: 10,  expectedResult: 10},
        {unit: 100, expectedResult: 100},
        {unit: 9,   expectedResult: '09'},
    ])('tests the "addZero" function when input is $unit', ({ unit, expectedResult }) => {
       /** Act */
        const response = addZero(unit);

        /** Assert */
        expect(response).toBe(expectedResult);
    });

    it.each([
        {input: '001',  expectedResult: '001'},
        {input: '01', expectedResult: '010'},
        {input: '0000', expectedResult: '000'},
        {input: 9,   expectedResult: '900'},
    ])('tests the "formatMilliseconds" function when input is $input', ({ input, expectedResult }) => {
       /** Act */
        const response = formatMilliseconds(input);

        /** Assert */
        expect(response).toBe(expectedResult);
    });

    it.each([
        {input: '100',  expectedResult: '00'},
        {input: '10', expectedResult: '10'},
        {input: 9,   expectedResult: '09'},
    ])('tests the "formatMillisecondsReverse" function when input is $input', ({ input, expectedResult }) => {
       /** Act */
        const response = formatMillisecondsReverse(input);

        /** Assert */
        expect(response).toBe(expectedResult);
    });
});
