export const formMessages = {
    EMAIL_FORMAT:               'Only letters, numbers, \'@\', \'.\' and \'-\' are allowed. \n Ex: name@example.com',
    PASSWORD_FORMAT:            'Only letters, numbers, \'@\', \'.\', \'!\', \'?\' and \'-\' are allowed. \n Ex: Example!123',
    PASSWORD_CONFIRMATION:      'This must match the above password entered.',
    USERNAME_FORMAT:            'Only letters and numbers, spaces and hyphens (-) are allowed.'
                                + ' The name must be at least three characters long. Ex: Example Name',
    SUBJECT_FORMAT:             'Only letters, numbers, apostrophes (\'), \'#\' and \'-\' are allowed.  Ex: MERN Stack Web-Dev',
    DETAILS_FORMAT:             'All characters except \'{}\', \'^\' and \'`\' are allowed.',
    RATED_UNDERSTANDING_FORMAT: 'Only numbers 1 through 10 are allowed.',
    DURATION_NOTICE:            'The duration field is automatically calculated by the app.',
    START_TIME_NOTICE:          'The start time field is automatically calculated by the app.',
    END_TIME_NOTICE:            'The end time field is automatically calculated by the app.'
}

/**
 * @param string reason = 'error'||'invalid'||''
 * @returns Object
 */
export const setFailMessage = (reason) => {
    let messageError = {
        class: 'error',
        text: 'Looks like something you entered is wrong. Try again.'
    }
    let messageInvalid = {
        class: 'error',
        text: 'That format seems off. Try again.'
    }
    let messageOops = {
        class: 'error',
        text: 'Oops, I dropped a pen! Try again.'
    }

    if (reason === 'error') {
        return messageError;
    }
    if (reason === 'invalid') {
        return messageInvalid;
    }
    
    return messageOops;
}

/**
 * @param string successText 
 * @returns Object
 */
export const setSuccessMessage = (successText) => {
    return {
        class: 'success',
        text: successText
    }
}
