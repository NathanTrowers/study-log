import { setFailMessage, setSuccessMessage } from '../../Utils/Message';

describe('Test the functions in the Message utility module.', () => {
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
