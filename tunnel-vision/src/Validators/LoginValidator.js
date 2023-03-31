export const validateLogin = (formData) => {
    const emailFormat  = /[A-Za-z0-9.-]+?@[A-Za-z0-9.-]+?\.[a-z]{2,}/;
    // const passwordFormat = /^[A-Za-z0-9\.\-\@\!\?]{8,15}$/;  use this for the user registration requirement.
    let { email, password } = formData;

    if (!emailFormat.test(email)
        || !password
    ) {
        return false;
    }
    
    return true;
}
