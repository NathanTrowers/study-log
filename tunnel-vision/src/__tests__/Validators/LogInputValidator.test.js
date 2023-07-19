import  mockLogData from './_data/MockLogData.js';
import { validateLogInput } from '../../Validators/LogInputValidator';

describe('Suite of tests for the "validateRegistration" function', () => {
    it('tests that "true" is returned when valid input is entered', () => {
        /** Act */
        let response = validateLogInput(mockLogData);

        /** Assert */
        expect(response).toBeTruthy();
    });

    it.each([
        {wrongSubjectFormat: '!!!__{}'},
        {wrongSubjectFormat: 'words have been $aid'},
        {wrongSubjectFormat: '_1 Numero UNU'},
        {wrongSubjectFormat: 'An Almost Perfect Subject Title {"malice": "injectionAttack"}'},
    ])('tests that "false" is returned when an $wrongSubjectFormat is entered', ({ wrongSubjectFormat }) => {
        /** Arrange */
        let testData = Object.assign({}, mockLogData);
        testData.subject = wrongSubjectFormat;

        /** Act */
        let response = validateLogInput(testData);

        /** Assert */
        expect(response).toBeFalsy();
    });

    it.each([
        {wrongDetailsFormat: '{}[]``_}'},
        {wrongDetailsFormat: 'words have been r^aid'},
        {wrongDetailsFormat: 'no back tick here!`'},
        {wrongDetailsFormat: 'An almost perfect set of details{"malice": "injectionAttack"}'},
    ])('tests that "false" is returned when $wrongDetailsFormat is entered', ({ wrongDetailsFormat }) => {
        /** Arrange */
        let testData = Object.assign({}, mockLogData);
        testData.details = wrongDetailsFormat;

        /** Act */
        let response = validateLogInput(testData);

        /** Assert */
        expect(response).toBeFalsy();
    });

    it.each([
        {wrongRatedUnderstandingFormat: '11 of 10'},
        {wrongRatedUnderstandingFormat: 'Z of 10'},
        {wrongRatedUnderstandingFormat: '3 of 100`'},
        {wrongRatedUnderstandingFormat: '-1 of 10'},
    ])('tests that "false" is returned when $wrongRatedUnderstandingFormat is entered', ({ wrongRatedUnderstandingFormat }) => {
        /** Arrange */
        let testData = Object.assign({}, mockLogData);
        testData.ratedUnderstanding = wrongRatedUnderstandingFormat;

        /** Act */
        let response = validateLogInput(testData);

        /** Assert */
        expect(response).toBeFalsy();
    });
});
