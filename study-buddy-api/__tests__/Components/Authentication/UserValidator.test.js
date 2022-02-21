
<<<<<<< HEAD
const { UserValidator } = require('@src/Components/Authentication/UserValidator');
=======
const { UserValidator } = require('$/src/Components/Authentication/UserValidator');
>>>>>>> 1a274f6733340c13c66cac3a97272b7b06ad11d4

   
describe('tests for the \'decideIfIsValidRegistration\' method', () => {
    /** Data */
    const registrationCase = [
        [
            {
                email: "test@test.com",
                name: "cyborg blackman",
                password: "LeagueMember"
            },
            User
        ],
        [
            {
                email: "",
                name: "cyborg blackman",
                password: "LeagueMember"
            },
            null
        ],
        [
            {
                email: "test@test.com",
                name: "",
                password: "LeagueMember"
            },
            null
        ],
        [
            {
                email: "test@test.com",
                name: "cyborg blackman",
                password: ""
            },
            null
        ]
    ];

    beforeEach(() => {
        const userValidator = new UserValidator();

        return userValidator;
    });

    test.each(registrationCase)('that registration input for a new user is validated', (registration, expectedValue) => {
        /** Call to Test */
        let result = userValidator.decideIfIsValidRegistration(registration);

        /** Expectation */
        expect(result).toBe(expectedValue);
    });
});
