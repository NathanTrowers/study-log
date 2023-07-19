import { calculateDuration, formatDate, formatTime } from '../../Utils/DataFormatter';

describe('Test Suite for the DataFormatter utility module', () => {
    it('tests the formatDate function', () => {
        /** Arrange */
        const data = '2023-04-19T13:55:49.549Z';

        /** Act */
        const response = formatDate(data);

        /** Assert */
        expect(response).toBe('2023-04-19 13:55:49.549');
    });

    it('tests the formatTime function', () => {
        /** Arrange */
        const data = new Date(1681912549549);

        /** Act */
        const response = formatTime(data);

        /** Assert */
        expect(response).toBe('13:55:49:549');
    });

    it('tests the calculateDuration function', () => {
        /** Arrange */
        const startTime = new Date(1681912549549);
        const endTime = new Date(1681916149549);

        /** Act */
        const response = calculateDuration(startTime, endTime);

        /** Assert */
        expect(response).toBe('01:00:00:000');
    });
});
