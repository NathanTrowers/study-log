export const validateRegistration = (formData) => {
    let { email, password, passwordConfirmation, userName } = formData;

    const emailFormat  = /[A-Za-z0-9.-]+?@[A-Za-z0-9.-]+?\.[a-z]{2,}/;
    const passwordFormat = /^[A-Za-z0-9.\-@!?]{8,15}$/;
    const userNameFormat = /^[A-Za-z0-9 -]{3,}$/;
    if (
        !(emailFormat.test(email) &&
        passwordFormat.test(password) &&
        userNameFormat.test(userName) &&
        password === passwordConfirmation)
    ) {
        return false;
    }    
    
    return true;
}
