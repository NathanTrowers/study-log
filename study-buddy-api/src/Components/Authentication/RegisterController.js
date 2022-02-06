const { UserValidator } = require('$/src/Components/Authentication/UserValidator');
const { UserRepository } = require('$/src/Components/Authentication/UserRepository');
const { BAD_REQUEST } = require('$/src/Constants/HttpCodeConstants');

const register = () => (req, res) => { 
    const validator = new UserValidator();
    let newUser = validator.decideIfIsValidRegistration(req.body);
    if(!newUser) {
        return res.status(BAD_REQUEST).json('incorrect form submission');
    }

    const userRepository = new UserRepository();
    let isUserAdded = userRepository.addUser(newUser);
    if (!isUserAdded) {
        return res.send(INTERNAL_SERVER_ERROR).json('Something went wrong on our end.');
    }

    let response = {
        "message": "Registration successfull"
    };

    return res.json(response);
};

module.exports = {
    register
};