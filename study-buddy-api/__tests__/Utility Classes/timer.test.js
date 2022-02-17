const timer = require('@study-buddy-api/src/Utility Classes/timer');

test('getting time-stamp for current time', () => {
    /** Call to Test */
    let timestamp = timer.recordTime();
    
    expect(timestamp)
        .toBeDefined()
        .toBeInstanceOf(Date);
});