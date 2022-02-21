<<<<<<< HEAD
require('@src/Entities/User');
=======
require('$/src/Entities/User');
>>>>>>> 1a274f6733340c13c66cac3a97272b7b06ad11d4

class UserValidator {
    constructor() {
    }

    /**
     * @param {array} registration
     * @returns User
     */
    decideIfIsValidRegistration(registration){
        const { email, name, password } = registration;

        let newUser = !email || !name || !password
            ? null
            : new User(email, name, password);

        return newUser;
    }

    // async validateUser() {
        
    // }

    // async decideIfIsAuthenticated() {

    // }

}

module.exports = {
    UserValidator
}