const MongoClient = require("mongodb").MongoClient;
const { DATABASE_URL } = require("../Constants/GeneralConstant");

const connection = `mongodb://${DATABASE_URL}`;

class MongoConnect
{
    connect(operation) {
        MongoClient.connect(connection, (err, db) => {
            studyLog = db.db('StudyLog')/********WORKING HERE: Figure out how to make this part DRY compliant in 15 mins or refactor it during code review instead */
        })
    }
}