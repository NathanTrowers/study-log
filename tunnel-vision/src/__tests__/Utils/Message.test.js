import { setDeleteMessage, setFailMessage, setSuccessMessage } from '../../Utils/Message';

describe('Test the functions in the Message utility module.', () => {
    describe('Testing setDeleteMessage ...', () => {
        it.each([
            {requestText: 'delete',         expectedText: 'Delete Log',                expectedClass: 'deleteButton'},
            {requestText: 'confirmDelete',  expectedText: 'Click to Confirm Delete',   expectedClass: 'confirmDeleteButton'},
            {requestText: '',               expectedText: 'DELETE FAILED',             expectedClass: 'deleteButton'}
        ])('returns "$expectedText" as the text and "$expectedClass" as the class', ({ expectedClass, expectedText, requestText }) => {
            /** Arrange */
            let expectedResult = {
                class: expectedClass,
                text: expectedText
            }

            /** Act */
            let response = setDeleteMessage(requestText);

            /** Assert */
            expect(response).toEqual(expectedResult);
        });
    });
    
    describe('Testing setFailMessage ...', () => {
        it.each([
            {reason: 'error', expectedText: 'Looks like something you entered is wrong. Try again.'},
            {reason: 'invalid', expectedText: 'That format seems off. Try again.'},
            {reason: '', expectedText: 'Oops, I dropped a pen! Try again.'},
        ])('returns "$expectedText" as the text when the input is "$reason"', ({ reason, expectedText }) => {
            /** Arrange */
            let expectedResult = {
                class: 'error',
                text: expectedText
            }

            /** Act */
            let response = setFailMessage(reason);

            /** Assert */
            expect(response).toEqual(expectedResult);
        });
    });

    describe('Testing setSuccessMessage ...', () => {
        it.each([
            {expectedText: 'Victoria!'},
            {expectedText: 'Hozahh!'},
            {expectedText: 'Flawless victory.'},
        ])('returns "$expectedText" as the text', ({ expectedText }) => {
            /** Arrange */
            let expectedResult = {
                class: 'success',
                text: expectedText
            }

            /** Act */
            let response = setSuccessMessage(expectedText);

            /** Assert */
            expect(response).toEqual(expectedResult);
        });
    });
});
