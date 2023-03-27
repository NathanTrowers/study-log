'use strict';

import bcrypt from 'bcryptjs';
import validateLogin from '../../src/Validators/LoginValidator';
import operationOutcome from '../../src/Constants/OperationOutcomeConstants.js';
import * as MongoConnect from '../../src/DatabaseConnector/MongoConnect.js';

describe('Suite of tests for the Login Validator', () => {

    it.each([
        {rightEmailFormat: 'test9@test.com'},
        {rightEmailFormat: 'test@test0.com'},
        {rightEmailFormat: 'test@tes-t.com'},
        {rightEmailFormat: 'TEST@TEST.com'},
        {rightEmailFormat: 'test@tes-t.karate'},
    ])('returns a user object when the right credentials are given', async ({ rightEmailFormat }) => {
        /** Data */
        let expectedResult = {
            user: {
                _id:            '63f3c7392deb6400c51b2b18',
                password:       '$2a$10$KviWp.9Ayd5CXn2WhRbmZO0b7lmpy4Gp95v3T/bOMtOdqDfnpbdNe',
                email:          rightEmailFormat,
                dateCreated:    '22-04-2-2020 9:34',
                userName:       'Studying Addict2'
            }
        };

        let req = {
            body: {
                email:      rightEmailFormat,
                password:   'bookworm',
            },
            session: {
                authorized: false,
                user:       null,
            }
        };
        
        /** Mocks */
        jest.spyOn(MongoConnect, 'findUser')
            .mockImplementation(() => Promise.resolve(
                {
                    status: operationOutcome.SUCCESS,
                    response:{
                        user: {
                            _id:            '63f3c7392deb6400c51b2b18',
                            password:       '$2a$10$KviWp.9Ayd5CXn2WhRbmZO0b7lmpy4Gp95v3T/bOMtOdqDfnpbdNe',
                            email:          rightEmailFormat,
                            dateCreated:    '22-04-2-2020 9:34',
                            userName:       'Studying Addict2'
                        } 
                    }
                }
            ));

        jest.spyOn(bcrypt, 'compareSync')
            .mockReturnValue(true);

        /** Service to Test */
        let result = await validateLogin(req);

        /** Assertions */
        expect(result).toEqual(expectedResult)
    });


    it.each([
        {wrongEmailFormat: 'tes!@test.com'},
        {wrongEmailFormat: 'test@tes%%.com'},
        {wrongEmailFormat: 'test@test.c'},
    ])('returns null object when $wrongEmailFormat is received as the email address', async ({ wrongEmailFormat }) => {
        /** Data */
        let expectedResult = null;

        let req = {
            body: {
                email:      wrongEmailFormat,
                password:   'bookworm',
            },
            session: {
                authorized: false,
                user:       null,
            }
        };

        /** Service to Test */
        let result = await validateLogin(req);

        /** Assertions */
        expect(result).toEqual(expectedResult)
    });

    it('returns null when the password check fails', async () => {
        /** Data */
        let expectedResult = null;

        let req = {
            body: {
                email:      'test@test.com',
                password:   'bookworm',
            },
            session: {
                authorized: false,
                user:       null,
            }
        };

        /** Mocks */
        jest.spyOn(MongoConnect, 'findUser')
            .mockImplementation(() => Promise.resolve(
                {
                    status: operationOutcome.SUCCESS,
                    response:{
                        user: {
                            _id:            '63f3c7392deb6400c51b2b18',
                            password:       '$2a$10$KviWp.9Ayd5CXn2WhRbmZO0b7lmpy4Gp95v3T/bOMtOdqDfnpbdNe',
                            email:          'test@test.com',
                            dateCreated:    '22-04-2-2020 9:34',
                            userName:       'Studying Addict2'
                        } 
                    }
                }
            ));
        

        jest.spyOn(bcrypt, 'compareSync')
            .mockReturnValue(false);

        /** Service to Test */
        let result = await validateLogin(req);

        /** Assertions */
        expect(result).toEqual(expectedResult)
    });

    it('returns null when the database returns no user', async () => {
        /** Data */
        let expectedResult = null;

        let req = {
            body: {
                email:      'test@test.com',
                password:   'bookworm',
            },
            session: {
                authorized: false,
                user:       null,
            }
        };

        
        /** Mocks */
        jest.spyOn(MongoConnect, 'findUser')
            .mockImplementation(() => Promise.resolve(
            {
                status:     operationOutcome.FAILURE,
                response:   null
            }
        ));

        /** Service to Test */
        let result = await validateLogin(req);

        /** Assertions */
        expect(result).toEqual(expectedResult)
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });
});
