const { MongoConnect } = require('$/study-buddy-api/src/DatabaseConnector/MongoConnect');
const timer = require('$/study-buddy-api/src/Utility Classes/timer');
const bcrypt = require('bcrypt-nodejs');
const { SUCCESS } = require('$/study-buddy-api/src//Constants/StatusConstants');

class UserRepository
{
    constructor() {
        this.dbClient = MongoConnect();
    }

    /**
     * Retrieve a single user
     * @returns User
     */
    // async findUserById() {
        
    // }

    /**
     * Add a single user
     * @param User newUser
     * @returns {boolean}
     */
    async addUser(newUser) {
        let email = newUser.email;
        let name = newUser.name;
        let salt = bcrypt.genSaltSync(12);
        let passwordHash = bcrypt.hashSync(newUser.password, salt);

        let query = [
            { 
                email: email, 
                password: passwordHash
            },
            { 
                email: email,
                name: name,
                dateCreated: timer.recordTime()
             }
        ];

        let collectionOne = 'Login';
        let collectionTwo = 'Users';

        let response = this.dbClient.runInsertTransaction(query, collectionOne, collectionTwo);

        let isUserAdded = response.status === SUCCESS
            ? true
            : false;

        return isUserAdded;
    }

    /**
     * Delete a single user
     */

    // async deleteUser() {

    // }

/**
 * learn OOP version of mongoDB driver implementation +++
 * create repository classes to find the the users with+++
 * create a token generation class to generate the session token (with expiry date)
 * unit test all of these classes before moving on.
 */
}

module.exports = {
    UserRepository
};