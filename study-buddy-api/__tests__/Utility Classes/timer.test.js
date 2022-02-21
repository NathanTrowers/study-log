<<<<<<< HEAD
const timer = require('@study-buddy-api/src/Utility Classes/timer');
=======
const timer = require('$/study-buddy-api/src/Utility Classes/timer');
>>>>>>> 1a274f6733340c13c66cac3a97272b7b06ad11d4

test('getting time-stamp for current time', () => {
    /** Call to Test */
    let timestamp = timer.recordTime();
    
    expect(timestamp)
        .toBeDefined()
        .toBeInstanceOf(Date);
});