require('$/study-buddy-api/src/Components/Authentication/UserValidator');
const { UserRepository } = require('$/study-buddy-api/src/Components/Authentication/UserRepository');

const register = (MongoClient, connection, bcrypt) => (req, res) => {
    const validator = new UserValidator();
    let isValidRegistration = validator.decideIfIsValidRegistration(req.body);
    if(!isValidRegistration) {
        return res.send(400).json('incorrect form submission');
    }

    const userRepository = new UserRepository();
    let isUserAdded = userRepository.addUser();

    if (isUserAdded) {
        let response = {
            "message": "Registration successfull"
        };

        return res.json(response);
    }

};

module.exports = {
    register
};