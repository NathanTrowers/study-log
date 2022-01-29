const MongoClient = require("mongodb").MongoClient;
const { DATABASE_URL } = require("../Constants/GeneralConstant");
const uri = `mongodb://${DATABASE_URL}`;

class MongoConnect
{
    constructor() {
        const client = MongoClient(uri);
    }

    /**
     * Connect to the database
     */
    async connect() {
        await client.connect();

        return client;
    }
}

/**
 * learn OOP version of mongoDB driver implementation
 * create repository classes to find the the users with
 * figure out whether a JWT or session variable is what you want
 * create a token generation class to generate the session token (with expiry date)
 * unit test all of these classes before moving on.
 */