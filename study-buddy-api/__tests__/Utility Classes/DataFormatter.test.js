import { formatDate } from '../../src/Utility Classes/DataFormatter';

describe('Test Suite for the DataFormatter utility module', () => {
    it('tests the formatDate function', () => {
        /** Arrange */
        const data =  [
            {date: '2023-04-19T13:55:49.549Z'}
        ];

        /** Act */
        const response = formatDate(data);

        /** Assert */
        expect(response[0].date).toBe('2023-04-19 13:55:49.549');
    });
});
