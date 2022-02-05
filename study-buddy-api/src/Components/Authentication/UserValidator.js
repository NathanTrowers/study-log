require('$/study-buddy-api/src/Entities/User');

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
            : new User(emai, name, password);
s
        return newUser;
    }

    async validateUser() {
        
    }

    async decideIfIsAuthenticated() {

    }

}

module.exports = {
    UserValidator
}