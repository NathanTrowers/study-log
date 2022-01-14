class MongoCRUD
{
    // +++++++++++++++++++Constructor
    constructor()
    {
        this.Mongo = require("mongodb").MongoClient;
        this.connection = "mongodb://localhost:2707/";
    }

    /**********Method: Create a new study log record */
    addNewRecord(record)
    {
        Mongo.connect(connection, function(err, db)
        {
            try
            {
                var studyLog = db.db("StudyLog")                //Declare Variable

                studyLog.collection("Session").insertOne(record, function()
                    {
                        console.log("\nRecord successfully inserted!\n");
                        studyLog.close()
                    })
            }
            catch
            {
                console.log("\nError while inserting a record in the StudyLog Mongo Database.\n"+ err)
            }
        })
    }

    /**********Method: Retrieve one or more study log records.*/
    showRecords(collectionName,criteria)
    {
        Mongo.connect(connection, function(err, db)
        {
            try
            {
                var studyLog = db.db("StudyLog")                //Declare Variable

                studyLog.collection(collectionName).find(criteria).toArray(function(obj)
                    {
                        console.log("\n%d record(s) successfully retrieved!\n", obj.result.n);
                        studyLog.close();

                        return obj;
                    })
            }
            catch
            {
                console.log("\nError while retrieving one or more records in the StudyLog Mongo Database.\n"+ err)
            }
        })
    }

    /**********Method: Edit a study log record.*/
    editRecord(query, revisedRecord)
    {
        Mongo.connect(connection, function(err, db)
        {
            try
            {
                var studyLog = db.db("StudyLog")                //Declare Variable

                studyLog.collection("Session").updateOne(query, revisedRecord, function(result)
                    {
                        console.log("\nRecords successfully updated!\n"+ result);
                        studyLog.close()
                    })
            }
            catch
            {
                console.log("\nError while updating a record in the StudyLog Mongo Database.\n"+ err)
            }
        })
    }

    /**********Method: Delete one or more study log records.*/
    deleteRecords(selection)
    {
        Mongo.connect(connection, function(err, db)
        {
            try
            {
                var studyLog = db.db("StudyLog")                 //Declare Variable

                studyLog.collection("Session").deleteMany(selection, function(obj)
                    {
                        console.log("\n%d record(s) successfully deleted!\n", obj.result.n);
                        studyLog.close()
                    })
            }
            catch
            {
                console.log("\nError while deleting one or more records in the StudyLog Mongo Database.\n"+ err)
            }
        })
    }
}

module.exports = MongoCRUD;
/**********Method: */
/*BEGIN***Variable Declaration*/
/*EDN***Variable Declaration*/
//Declare Variable
// console.log(""+);