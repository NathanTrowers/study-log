const Validator = require('$/Components/Authentication/CredentialValidat'); /*****WORKING HERE: Fix the reference to the Validator */

const login = (MongoClient, connection, bcrypt) => (req, res) => {
    const { email, name, password } = req.body;

    MongoClient.connect(connection, (err, db) => {
        if (err) {
            console.log( `There was an isue logging in a user \n ${err}`);
        }

        let StudyLog = db.db("StudyLog");
        let query = {} 
    })
}

module.exports = {
    login
}