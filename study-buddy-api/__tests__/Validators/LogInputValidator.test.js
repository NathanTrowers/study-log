'use strict';

import * as mockLogData from './_data/MockLogData.json';
import { validationErrorCodes } from '../../src/Constants/FieldErrorCodeConstants.js';
import operationOutcome from '../../src/Constants/OperationOutcomeConstants.js';
import * as MongoConnect from '../../src/DatabaseConnector/MongoConnect.js';
import { validateEditLogInput, validateNewLogInput } from '../../src/Validators/LogInputValidator.js';

describe('Test Suite for the Log Input Validator', () => {
    it('test that "validateNewLogInput" returns no validation errors', async () => {
        /** Data */
        let testData = Object.assign({}, mockLogData);

        const expectedResult = {
            status: operationOutcome.SUCCESS,
            validationErrors: []
        }

        /** Mocks */
        jest.spyOn(MongoConnect, 'saveNewLog')
            .mockImplementation(() => Promise.resolve(
                operationOutcome.SUCCESS
            ));

        /** Service to Test */
        const result = await validateNewLogInput(testData);

        /** Assert */
        expect(result).toStrictEqual(expectedResult);
    });

    it.each([
        {wrongUserId: 123},
        {wrongUserId: 5823974492875827598},
        {wrongUserId: '63f3c739-2deb-6400-c51b-2b183a9cf10'},
        {wrongUserId: '63f3c739-2deb-6400-c51b-2b183a9cf10z'},
    ])('test that "validateNewLogInput" returns the user ID validation error when $wrongUserId is given', async ({ wrongUserId }) => {
        /** Data */
        let testData = Object.assign({}, mockLogData);

        const expectedResult = {
            status: operationOutcome.VALIDATION_FAILURE,
            validationErrors: [validationErrorCodes.ERROR_USER_ID_FORMAT]
        }

        testData.userId = wrongUserId;

        /** Service to Test */
        const result = await validateNewLogInput(testData);

        /** Assert */
        expect(result).toStrictEqual(expectedResult);
    });

    it.each([
        {wrongSubjectFormat: '!!!__{}'},
        {wrongSubjectFormat: 'words have been $aid'},
        {wrongSubjectFormat: '_1 Numero UNU'},
        {wrongSubjectFormat: 'An Almost Perfect Subject Title {"malice": "injectionAttack"}'},
    ])('test that "validateNewLogInput" returns the subject format validation error when $wrongSubjectFormat is given', async ({ wrongSubjectFormat }) => {
        /** Data */
        let testData = Object.assign({}, mockLogData);

        const expectedResult = {
            status: operationOutcome.VALIDATION_FAILURE,
            validationErrors: [validationErrorCodes.ERROR_SUBJECT_FORMAT]
        }

        testData.subject = wrongSubjectFormat;

        /** Service to Test */
        const result = await validateNewLogInput(testData);

        /** Assert */
        expect(result).toStrictEqual(expectedResult);
    });

    it.each([
        {wrongDetailsFormat: '{}[]``_}'},
        {wrongDetailsFormat: 'words have been r^aid'},
        {wrongDetailsFormat: 'no back tick here!`'},
        {wrongDetailsFormat: 'An almost perfect set of details{"malice": "injectionAttack"}'},
    ])('test that "validateNewLogInput" returns the details validation error when $wrongDetailsFormat is given', async ({ wrongDetailsFormat }) => {
        /** Data */
        let testData = Object.assign({}, mockLogData);

        const expectedResult = {
            status: operationOutcome.VALIDATION_FAILURE,
            validationErrors: [validationErrorCodes.ERROR_DETAILS_FORMAT]
        }
        
        testData.details = wrongDetailsFormat;

        /** Service to Test */
        const result = await validateNewLogInput(testData);

        /** Assert */
        expect(result).toStrictEqual(expectedResult);
    });

    it.each([
        {wrongRatedUnderstandingFormat: '11 of 10'},
        {wrongRatedUnderstandingFormat: 'Z of 10'},
        {wrongRatedUnderstandingFormat: '3 of 100`'},
        {wrongRatedUnderstandingFormat: '-1 of 10'},
    ])('test that "validateNewLogInput" returns the rated understanding validation error when $wrongRatedUnderstandingFormat is given', async ({ wrongRatedUnderstandingFormat }) => {
        /** Data */
        let testData = Object.assign({}, mockLogData);

        const expectedResult = {
            status: operationOutcome.VALIDATION_FAILURE,
            validationErrors: [validationErrorCodes.ERROR_RATED_UNDERSTANDING_FORMAT]
        }
        
        testData.ratedUnderstanding = wrongRatedUnderstandingFormat;

        /** Service to Test */
        const result = await validateNewLogInput(testData);

        /** Assert */
        expect(result).toStrictEqual(expectedResult);
    });

    it.each([
        {wrongDurationFormat: '009'},
        {wrongDurationFormat: '00:03:00:9999'},
        {wrongDurationFormat: '00:23-00:00'},
        {wrongDurationFormat: '99:99:99:99'},
    ])('test that "validateNewLogInput" returns the duration validation error when $wrongDurationFormat is given', async ({ wrongDurationFormat }) => {
        /** Data */
        let testData = Object.assign({}, mockLogData);

        const expectedResult = {
            status: operationOutcome.VALIDATION_FAILURE,
            validationErrors: [validationErrorCodes.ERROR_DURATION_FORMAT]
        }
        
        testData.duration = wrongDurationFormat;

        /** Service to Test */
        const result = await validateNewLogInput(testData);

        /** Assert */
        expect(result).toStrictEqual(expectedResult);
    });

    it.each([
        {wrongDateFormat: '2023-004-19 13:55:49:549'},
        {wrongDateFormat: '00:03:00:9999'},
        {wrongDateFormat: '2023-04:19 13:55:49:549'},
        {wrongDateFormat: '3023-04-19 13:55:49:549'},
    ])('test that "validateNewLogInput" returns the duration validation error when $wrongDateFormat is given', async ({ wrongDateFormat }) => {
        /** Data */
        let testData = Object.assign({}, mockLogData);

        const expectedResult = {
            status: operationOutcome.VALIDATION_FAILURE,
            validationErrors: [validationErrorCodes.ERROR_DATE_FORMAT]
        }
        
        testData.date = wrongDateFormat;

        /** Service to Test */
        const result = await validateNewLogInput(testData);

        /** Assert */
        expect(result).toStrictEqual(expectedResult);
    });

    it.each([
        {wrongStartTimeFormat: '123'},
        {wrongStartTimeFormat: '00:03:00:9999'},
        {wrongStartTimeFormat: '00:23-00:000'},
        {wrongStartTimeFormat: '99:99:99:999'},
    ])('test that "validateNewLogInput" returns the start time validation error when $wrongStartTimeFormat is given', async ({ wrongStartTimeFormat }) => {
        /** Data */
        let testData = Object.assign({}, mockLogData);

        const expectedResult = {
            status: operationOutcome.VALIDATION_FAILURE,
            validationErrors: [validationErrorCodes.ERROR_START_TIME_FORMAT]
        }
        
        testData.startTime = wrongStartTimeFormat;

        /** Service to Test */
        const result = await validateNewLogInput(testData);

        /** Assert */
        expect(result).toStrictEqual(expectedResult);
    });
    
    it.each([
        {wrongEndTimeFormat: '123'},
        {wrongEndTimeFormat: '00:03:00:9999'},
        {wrongEndTimeFormat: '00:23-00:000'},
        {wrongEndTimeFormat: '99:99:99:999'},
    ])('test that "validateNewLogInput" returns the end time validation error when $wrongEndTimeFormat is given', async ({ wrongEndTimeFormat }) => {
        /** Data */
        let testData = Object.assign({}, mockLogData);

        const expectedResult = {
            status: operationOutcome.VALIDATION_FAILURE,
            validationErrors: [validationErrorCodes.ERROR_END_TIME_FORMAT]
        }
        
        testData.endTime = wrongEndTimeFormat;

        /** Service to Test */
        const result = await validateNewLogInput(testData);

        /** Assert */
        expect(result).toStrictEqual(expectedResult);
    });

    it('test that "validateNewLogInput" returns the details, ratedUnderstanding and duration validation errors', async () => {
        /** Data */
        let testData = Object.assign({}, mockLogData);

        const expectedResult = {
            status: operationOutcome.VALIDATION_FAILURE,
            validationErrors: [validationErrorCodes.ERROR_DETAILS_FORMAT,
                validationErrorCodes.ERROR_RATED_UNDERSTANDING_FORMAT,
                validationErrorCodes.ERROR_DURATION_FORMAT]
        }
        
        testData.details = '{"injectionAttack: "malice"}';
        testData.ratedUnderstanding = 'z of 10';
        testData.duration = '25:00:00:000';

        /** Service to Test */
        const result = await validateNewLogInput(testData);

        /** Assert */
        expect(result).toStrictEqual(expectedResult);
    });

    it('test that "validateEditLogInput" returns no validation errors', async () => {
        /** Data */
        let testData = Object.assign({}, mockLogData);

        const expectedResult = {
            status: operationOutcome.SUCCESS,
            validationErrors: []
        }

        testData.logId = '63f3c739-2deb-6400-c51b-2b183a9cf104'

        /** Mocks */
        jest.spyOn(MongoConnect, 'editExistingLog')
            .mockImplementation(() => Promise.resolve(
                operationOutcome.SUCCESS
            ));

        /** Service to Test */
        const result = await validateEditLogInput(testData);

        /** Assert */
        expect(result).toStrictEqual(expectedResult);
    });

    it('test that "validateEditLogInput" returns the logId, userId, details, and ratedUnderstanding validation errors', async () => {
        /** Data */
        let testData = Object.assign({}, mockLogData);

        const expectedResult = {
            status: operationOutcome.VALIDATION_FAILURE,
            validationErrors: [validationErrorCodes.ERROR_USER_ID_FORMAT,
                validationErrorCodes.ERROR_LOG_ID_FORMAT,
                validationErrorCodes.ERROR_DETAILS_FORMAT,
                validationErrorCodes.ERROR_RATED_UNDERSTANDING_FORMAT,]
        }

        testData.userId = '63f3c739-2deb-6400-c51b-2b183a9cf10z';
        testData.logId = '63f3c739-2deb-6400-c351b-2b183a9cf104';
        testData.details = '{"injectionAttack: "malice"}';
        testData.ratedUnderstanding = 'z of 10';

        /** Service to Test */
        const result = await validateEditLogInput(testData);

        /** Assert */
        expect(result).toStrictEqual(expectedResult);
    });
});
