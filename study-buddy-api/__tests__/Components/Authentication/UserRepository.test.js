const { UserRepository } = require('$/src/Components/Authentication/UserRepository');
const { MongoConnect } = require('$/src/DatabaseConnector/MongoConnect');
const { SUCCESS, FAILURE } = require('../../../src/Constants/StatusConstants');
require('$/src/Entities/User');


describe.each(newUser)('test the \'addUser\' method', () => {
    beforeAll(() => {
        /** Data for the tests in this group */
        let newUser = new User();
        newUser.email = "test@test.com";
        newUser.name = "cyborg blackman";
        newUser.password = "LeagueMember";

        return newUser;
    });
    
    beforeEach(() => {
        const userRepository = new UserRepository();
        jest.mock('MongoConnect');

        return  userRepository;
    });

    test('when adding a new user to the database', (newUser) => {
        /** Mock */
        MongoConnect
            .runInsertTransaction
            .mockResolvedValue({ status: SUCCESS});

        /** Call to Test */
        let result = userRepository.addUser(newUser);

        /** Expectation */
        expect(result).toBeTruthy();

    });
    test('when an error occurs while adding a user to the database', () => {
        /** Mock */
        MongoConnect
            .runInsertTransaction
            .mockResolvedValue({ status: FAILURE});

        /** Call to Test */
        let result = userRepository.addUser(newUser);
        
        /** Expectation */
        expect(result).toBeFalsy();

    });
});