'use strict';

import bcrypt from 'bcryptjs';
import validateRegistration from '../../src/Validators/RegistrationValidator';
import operationOutcome from '../../src/Constants/OperationOutcomeConstants.js';
import * as MongoConnect from '../../src/DatabaseConnector/MongoConnect.js';

describe('Test Suite for the Registration Validator', () => {
    it.each([
        {rightEmailFormat: 'test9@test.com',    rightPasswordFormat: 'bookworm',        rightUserNameFormat: 'Studying Addict2'},
        {rightEmailFormat: 'test@test0.com',    rightPasswordFormat: 'bo0Kw.?m',        rightUserNameFormat: 'STUDYING ADDICT2'},
        {rightEmailFormat: 'test@tes-t.com',    rightPasswordFormat: 'B0Okw@rm!',       rightUserNameFormat: 'studyingaddict '},
        {rightEmailFormat: 'TEST@TEST.com',     rightPasswordFormat: 'BOOK-WORM@?z',    rightUserNameFormat: 'study1ng033ict'},
        {rightEmailFormat: 'test@tes-t.karate', rightPasswordFormat: '12345678901234',  rightUserNameFormat: 'Stud91ing A22ict '},
    ])('returns "success" when the request contains "$rightEmailFormat", "$rightPasswordFormat" and "$rightUserNameFormat"', 
    async ({ rightEmailFormat, rightPasswordFormat, rightUserNameFormat }) => {
        /** Data */
        let expectedResult = operationOutcome.SUCCESS;

        let req = {
            body: {
                email:      rightEmailFormat,
                password:   rightPasswordFormat,
                userName:   rightUserNameFormat
            }
        };

        /** Mocks */
        jest.spyOn(MongoConnect, 'findUser')
            .mockImplementation(() => Promise.resolve({}));
        jest.spyOn(MongoConnect, 'createUser')
            .mockImplementation(() => Promise.resolve(
            {
                status: operationOutcome.SUCCESS,
                response: { 
                    acknowledged : true,
                    insertedId : '63f3c739-c739-63f3-6400-2deb6400c51b2b18'
                }
            }
        ));

        /** Service to Test */
        let response = await validateRegistration(req);

        /** Assertion */
        expect(response).toBe(expectedResult);
    });

    it.each([
        {wrongEmailFormat: 'tes!@test.com'},
        {wrongEmailFormat: 'test@tes%%.com'},
        {wrongEmailFormat: 'test@test.c'},
    ])('returns "failure" when "$wrongEmailFormat" is received as the email address', async ({ wrongEmailFormat }) => {
          /** Data */
          let expectedResult = operationOutcome.FAILURE;

          let req = {
              body: {
                  email:      wrongEmailFormat,
                  password:   'bookworm',
                  userName:   'Studying Addict2'
              }
          };

          /** Service to Test */
          let response = await validateRegistration(req);
  
          /** Assertion */
          expect(response).toBe(expectedResult);
    });

    it.each([
        {wrongPasswordFormat: 'bookwor'},
        {wrongPasswordFormat: 'b%okworm'},
        {wrongPasswordFormat: 'bookwormmmmmmmmm'},
        {wrongPasswordFormat: 'bookwormmmmmmm$'},
    ])('returns "failure" when "$wrongPasswordFormat" is received as the password', async ({ wrongPasswordFormat }) => {
        /** Data */
        let expectedResult = operationOutcome.FAILURE;

        let req = {
            body: {
                email:      'test9@test.com',
                password:   wrongPasswordFormat,
                userName:   'Studying Addict2'
            }
        };

        /** Service to Test */
        let response = await validateRegistration(req);

        /** Assertion */
        expect(response).toBe(expectedResult);
  });

  it.each([
    {wrongUserNameFormat: 'Studying Add!ct2'},
    {wrongUserNameFormat: '{name: Jimmy}'},
    {wrongUserNameFormat: 'Studying_Add!ct2'},
  ])('returns "failure" when "$wrongUserNameFormat" is received as the userName', async ({ wrongUserNameFormat }) => {
        /** Data */
        let expectedResult = operationOutcome.FAILURE;

        let req = {
            body: {
                email:      'test9@test.com',
                password:   'bookworm',
                userName:   wrongUserNameFormat
            }
        };

        /** Service to Test */
        let response = await validateRegistration(req);

        /** Assertion */
        expect(response).toBe(expectedResult);
    });

    it('returns "failure" when the database finds a user with the given email address', async () => {
          /** Data */
          let expectedResult = operationOutcome.FAILURE;

          let req = {
              body: {
                  email:      'test9@test.com',
                  password:   'bookworm',
                  userName:   'Studying Addict2'
              }
          };

        /** Mocks */
        jest.spyOn(MongoConnect, 'findUser')
            .mockImplementation(() => Promise.resolve(
                {
                    status: operationOutcome.SUCCESS,
                    response:{
                        _id:            '63f3c7392deb6400c51b2b18',
                        password:       '$2a$10$KviWp.9Ayd5CXn2WhRbmZO0b7lmpy4Gp95v3T/bOMtOdqDfnpbdNe',
                        email:          'test9@test.com',
                        dateCreated:    '22-04-2-2020 9:34',
                        userName:       'Studying Addict2'
                    }
                }
            ));
          
          /** Service to Test */
          let response = await validateRegistration(req);
  
          /** Assertion */
          expect(response).toBe(expectedResult);
    });

    it('returns "failure" when the databse fails to create user', async () => {
          /** Data */
          let expectedResult = operationOutcome.FAILURE;

          let req = {
              body: {
                  email:      'test9@test.com',
                  password:   'bookworm',
                  userName:   'Studying Addict2'
              }
          };

        /** Mocks */
        jest.spyOn(MongoConnect, 'findUser')
            .mockImplementation(() => Promise.resolve(
                {
                    status: operationOutcome.FAILURE,
                    response: { 
                        message : `unable to find user with email test9@test.com`
                    }
                }
            ));
        jest.spyOn(MongoConnect, 'createUser')
            .mockImplementation(() => Promise.resolve(
                {
                    status: operationOutcome.FAILURE,
                    response: { 
                        message : 'an error occurred when performing the insertOne operation'
                    }
                }
            ));
          
          /** Service to Test */
          let response = await validateRegistration(req);
  
          /** Assertion */
          expect(response).toBe(expectedResult);
    });
});
