const timer = require('../../src/Utility Classes/timer');
const datetime = require("node-datetime");

test('getting time-stamp for current time', () => {
    /** Call to Test */
    let timestamp = timer.recordTime();
    
    expect(timestamp)
        .toBeDefined()
});