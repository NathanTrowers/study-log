export const formMessages = {
    EMAIL_FORMAT:           'Only letters, numbers, \'@\', \'.\' and \'-\' are allowed. \n Ex: name@example.com',
    PASSWORD_FORMAT:        'Only letters, numbers, \'@\', \'.\', \'!\', \'?\' and \'-\' are allowed. \n Ex: Example!123',
    PASSWORD_CONFIRMATION:  'This must match the above password entered.',
    USERNAME_FORMAT:        'Only letters and numbers, spaces and hyphens (-) are allowed.'
                            + ' The name must be at least three characters long. Ex: Example Name'
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
