import { validateLogin } from "../../Validators/LoginValidator";

describe('Suite of tests for the "validateLogin" function', () => {
    it.each([
        { email: 'name-@example.com',  password: 'Example!123' },
        { email: 'name@ex.ample.com',  password: 'Example!123' },
        { email: 'name@example.ze',    password: 'Example!123' },
        { email: '9name@exa9mple.ze',  password: 'Example!123' },
    ])('tests that "true" is returned when "$email" and "$password" are entered', ({email, password}) => {
        /**Arrange */
        let formData = {
            email: email,
            password: password
        }

        /**Act */
        let result = validateLogin(formData);

        /**Assert */
        expect(result).toBeTruthy();
    });

        it.each([
            { email: 'name!@example.com',  password: 'Example!123' },
            { email: 'name@exa_mple.com',  password: 'Example!123' },
            { email: 'name@example.z',     password: 'Example!123' },
            { email: 'name@example.com',   password: '' }
        ])('tests that "false" is returned when "$email" and "$password" are entered', ({email, password}) => {
        /**Arrange */
        let formData = {
            email: email,
            password: password
        }

        /**Act */
        let result = validateLogin(formData);

        /**Assert */
        expect(result).toBeFalsy();
    });
});
