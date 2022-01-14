const signUp = (MongoClient, connection, bcrypt) => (req, res) => {
    const { email, name, password } = req.body;

    if(!email || !name || !password) {
        res.send(400).json('incorrect form submission');
    }

    const hash = bcrypt.hashSync(password);

    const transactionOptions = {
        readPreference: 'primary',
        readConcern: { level: 'local'},
        writeConcern: { w: 'majority'}
    };

    MongoClient.connect(connection, (err, db) => {
        if (err) {
        /**Need to relearn MongoDB with async-await syntax */    
            console.log( `There was an isue creating a user \n ${err}`);
        }

        let StudyLog = db.db("StudyLog");
        StudyLog.collection('login"')
    });
};

module.exports = {
    signUp
};