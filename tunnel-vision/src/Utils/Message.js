/**
 * @param string reason = 'error'||'invalid'||''
 * @returns Object
 */
export const setFailMessage = (reason) => {
    let messageError = {
        class: 'error',
        text: 'Either your username or password is incorrect. Try again.'
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
