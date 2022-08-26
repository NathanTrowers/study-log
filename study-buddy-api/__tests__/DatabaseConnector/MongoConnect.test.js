import { MongoConnect } from "../../src/DatabaseConnector/MongoConnect";


beforeAll(() => {
    var MongoConnection = new MongoConnect();

    return MongoConnection;
});

describe('Intergration tests with the MongoDB container', () => {
    it.each(
        'tests the find method',
        () => {
            /** Data */
            let expectedResult;
            let criteria = {
                email:  "nathan@test.com",
            };

            /** Call to Test */
            let result = MongoConnection.find(criteria, 'Login');

            /** Expectation */
            expect(result).toBe(expectedResult);
        }
    );

    xit(
        'tests the find method when an error is thrown',
        () => {
            /** Data */
            let criteria = {
                email:  [],
            };

            /** Expectation */
            expect(MongoConnection.find(criteria, 'Dragon')).toThrow(Error);
        }
    )
});

afterAll(() => {
    MongoConnection = null;
})