import { validateRegistration } from "../../Validators/RegistrationValidator";

describe('Suite of tests for the "validateRegistration" function', () => {
    it.each([
        { email: 'name-@example.com',  password: 'Example!123',     passwordConfirmation: 'Example!123',    userName: 'Name Example' },
        { email: 'name@ex.ample.com',  password: 'ExamPLE.?12e',    passwordConfirmation: 'ExamPLE.?12e',   userName: 'NAME EXAMPLE1' },
        { email: 'name@example.ze',    password: 'Examp-1e@12E',    passwordConfirmation: 'Examp-1e@12E',   userName: 'nameexample' },
        { email: '9name@exa9mple.ze',  password: '12345678901234',  passwordConfirmation: '12345678901234', userName: 'Name-Ex87p1e ' },
    ])('tests that "true" is returned when "$email", "$password" "$passwordConfirmation" and "$userName" are entered', ({email, password, passwordConfirmation, userName}) => {
        /**Arrange */
        let formData = {
            email: email,
            password: password,
            passwordConfirmation: passwordConfirmation,
            userName: userName
        }

        /**Act */
        let result = validateRegistration(formData);

        /**Assert */
        expect(result).toBeTruthy();
    });

    it.each([
        {wrongEmailFormat: 'nam!@example.com'},
        {wrongEmailFormat: 'name@example%%.com'},
        {wrongEmailFormat: 'name@example.c'},
    ])('tests that "false" is returned when $wrongEmailFormat is received as the email address', ({ wrongEmailFormat }) => {
        /**Arrange */
        let formData = {
            email: wrongEmailFormat,
            password: 'Example!123',
            passwordConfirmation: 'Example!123',
            userName: 'Name Example'
        }

        /**Act */
        let result = validateRegistration(formData);

        /**Assert */
        expect(result).toBeFalsy();
    });

    it.each([
        {wrongPasswordFormat: 'Example;123'},
        {wrongPasswordFormat: 'Example_123'},
        {wrongPasswordFormat: 'Example!12345789012345'},
        {wrongPasswordFormat: 'Ex'},
    ])('tests that "false" is returned when "$wrongPasswordFormat" is received as the password', ({ wrongPasswordFormat }) => {
        /**Arrange */
        let formData = {
            email: 'name-@example.com',
            password: wrongPasswordFormat,
            passwordConfirmation: wrongPasswordFormat,
            userName: 'Name Example'
        }

        /**Act */
        let result = validateRegistration(formData);

        /**Assert */
        expect(result).toBeFalsy();
    });

    it.each([
        {wrongUserNameFormat: 'Name_Example'},
        {wrongUserNameFormat: 'Name@Example-'},
        {wrongUserNameFormat: 'Name.Example'},
        {wrongUserNameFormat: 'Na'},
    ])('tests that "false" is returned when "$wrongUserNameFormat" is received as the username', ({ wrongUserNameFormat }) => {
        /**Arrange */
        let formData = {
            email: 'name@example.com',
            password: 'Example!123',
            passwordConfirmation: 'Example!123',
            userName: wrongUserNameFormat
        }

        /**Act */
        let result = validateRegistration(formData);

        /**Assert */
        expect(result).toBeFalsy();
    });

    it.each([
        {wrongPasswordConfirmation: 'Example!12E'},
        {wrongPasswordConfirmation: 'Name@Example-'},
        {wrongPasswordConfirmation: ''},
        {wrongPasswordConfirmation: 'eXAMPLE!123'},
    ])('tests that "false" is returned when "$wrongPasswordConfirmation" does not match "Example!123" as the password', ({ wrongPasswordConfirmation }) => {
        /**Arrange */
        let formData = {
            email: 'name@example.com',
            password: 'Example!123',
            passwordConfirmation: wrongPasswordConfirmation,
            userName: 'Name Example'
        }

        /**Act */
        let result = validateRegistration(formData);

        /**Assert */
        expect(result).toBeFalsy();
    });
});
