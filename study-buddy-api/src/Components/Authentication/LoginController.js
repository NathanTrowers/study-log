const login = (MongoClient, connection, bcrypt) => (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json('Incorrrect form submission');
    }

    MongoClient.connect(connection, (err, db) => {
        if (err) {
            console.log( `There was an isue logging in a user \n ${err}`);
        }

        let StudyLog = db.db("StudyLog");
        StudyLog.collection("login")
            .find({ email: email}, { password: 1, _id: 0 })
            .toArray((err, dbPassword) => {
                const isValid = bcrypt.compareSync(password, dbPassword[0].hash);
                if (isValid) {
                    StudyLog.collection("users")
                        .find({email: email})
                        .toArray((err, user) => {
                            db.close();
                            res.json(user);
                        })
                        .catch(err => res.status(400).json("Unable to find that user."));
                }
            })
            .catch(err => res.status(400).json("Invalid Login."));
    })
}

module.exports = {
    login
}