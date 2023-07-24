import { countTime } from '../../Utils/Stopwatch';

describe('Test suite for the Stopwatch module', () => {
    it('integration test that "countTime" adds a milliseond of time', () => {
        /** Arrange */
        const time = '00:00:00:00';
        const expectedTime = '00:00:00:01';

        /** Act */
        const result = countTime(time);

        /** Assert */
        expect(result).toBe(expectedTime);
    });
    
    it('integrationtest that "countTime" changes the second of the time', () => {
        /** Arrange */
        const time = '00:00:00:99';
        const expectedTime = '00:00:01:00';

        /** Act */
        const result = countTime(time);

        /** Assert */
        expect(result).toBe(expectedTime);
    });

    it('integration test that "countTime" changes the minute of the time', () => {
        /** Arrange */
        const time = '00:00:59:99';
        const expectedTime = '00:01:00:00';

        /** Act */
        const result = countTime(time);

        /** Assert */
        expect(result).toBe(expectedTime);
    });

    it('integration test that "countTime" changes the hour of the time', () => {
        /** Arrange */
        const time = '00:59:59:00';
        const expectedTime = '01:00:00:01';

        /** Act */
        const result = countTime(time);

        /** Assert */
        expect(result).toBe(expectedTime);
    });

    it('integration test that "countTime" changes the hour, minute and second of the time', () => {
        /** Arrange */
        const time = '00:59:59:99';
        const expectedTime = '01:00:00:00';

        /** Act */
        const result = countTime(time);

        /** Assert */
        expect(result).toBe(expectedTime);        
    });
});
