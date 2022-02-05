const MongoClient = require("mongodb");
const { DATABASE_URL } = require("$/study-buddy-api/src/Constants/GeneralConstants");
const { SUCCESS, FAILURE } = require("$/study-buddy-api/src/Constants/StatusConstants");
const uri = `mongodb://${DATABASE_URL}`;

class MongoConnect
{
    constructor() {
        this.client = MongoClient(uri);
        this.status = SUCCESS;
        this.response = {};

        await this.client.connect();
        this.db = this.client.db('StudyLog');
    }

    /**
     * Runs multi-collection insertions
     * @param {Object[]} query
     * @param {string} collectionOne
     * @param {string} collectionTwo
     * @returns {Object}
     */
    async runInsertTransaction(query, collectionOne,collectionTwo) {
        const session = this.client.startSession();

        try{
            await session.withTransaction(async () => {
                const collOne = await this.db.collection(collectionOne);
                const collTwo = await this.db.collection(collectionTwo);

                await collOne.insertOne(query[0], { session });
                await collTwo.insertOne(query[1], { session });
            });

            console.log('Insertion transaction successfull!');
            this.status = SUCCESS;
            this.response = { status: this.status };

            return this.response;
        } catch(error) {
            console.error(`An error occured while trying to run an insertion transaction in the database ${error}`);
            this.status = FAILURE;
            this.response = {
                status: this.status,
            };

            return this.response;
        } finally {
            await session.endSession();
            await this.client.close();
        }
    }

    /**
     * Rusn multi-collection deletions
     * @param {string[]} query
     * @param {string} collectionOne
     * @param {string} collectionTwo
     * @returns {string[]}
     */
    async runDeleteTransaction(query, collectionOne,collectionTwo) {
        const session = this.client.startSession();

        try{
            await session.withTransaction(async () => {
                const collOne = await this.db.collection(collectionOne);
                const collTwo = await this.db.collection(collectionTwo);

                await collOne.deleteOne(query[0], { session });
                await collTwo.deleteOne(query[1], { session });
            });

            console.log('Deletion transaction successfull!');
            this.status = SUCCESS;
            this.response = { status: this.status };

            return this.response;
        } catch(error) {
            console.error(`An error occured while trying to run an deletion transaction in the database ${error}`);
            this.status = FAILURE;
            this.response = {
                status: this.status,
            };
            
            return this.response;
        } finally {
            await session.endSession();
            await this.client.close();
        }
    }

    /**
     * Finds one or more records
     * @param {Object} query
     * @param {string} collectionName
     * @return {Object}
     */
    async find(query = {}, collectionName) {
        try{
            let queryResponse = await this.db
                .collection(collectionName)
                .find(query);
                
            console.log('query successfull!');
            this.status = SUCCESS;
            this.response = {
                status: this.status,
                queryResponse: queryResponse
            };

            return this.response;
        } catch(error) {
            console.error(`An error occured while trying to find a record into the database ${error}`);
            this.status = FAILURE;
            this.response = {
                status: this.status,
                error: error
            };
            
            return this.response;
        } finally {
            this.client.close();
        }
    }

    
    /**
     * Creates one record
     * @param {Object} record
     * @param {string} collectionName
     * @return {Object}
     */
    async insertOne(record, collectionName) {
        try{
            await this.db
                .collection(collectionName)
                .insertOne(record);
            
            console.log('Record created!');
            this.status = SUCCESS;
            this.response = { status: this.status };

            return this.response;
        } catch(error) {
            console.error(`An error occured while inserting a record into the database ${error}`); 
            this.status = FAILURE;
            this.response = {
                status: this.status,
                error: error
            };
            
            return this.response;
        } finally {
            this.client.close();
        }
    }

    /**
     * Edit one record
     * @param {Object} query
     * @param {Object} updates
     * @param {string} collectionName
     * @return {Object}
     */
    async editOne(query, updates, collectionName) {
        try{
            await this.db
                .collection(collectionName)
                .updateOne(query, updates);

            console.log('Record edited!');
            this.status = SUCCESS;
            this.response = { status: this.status };

            return this.response;
        } catch(error) {
            console.error(`An error occured while modifying a record in the database ${error}`);
            this.status = FAILURE;
            this.response = {
                status: this.status,
                error: error
            };
            
            return this.response;
        } finally {
            this.client.close();
        }
    }

    /**
     * Deletes one or more record
     * @param {Object} record
     * @param {string} collectionName
     * @return {Object}
     */
    async delete(query, collectionName) {
        try{
            await this.db
                .collection(collectionName)
                .deleteMany(query);

            console.log('Record deleted!');
            this.status = SUCCESS;
            this.response = { status: this.status };

            return this.response;
        } catch(error) {
            console.error(`An error occured while deleting a record from the database ${error}`);
            this.status = FAILURE;
            this.response = {
                status: this.status,
                error: error
            };
            
            return this.response;;
        } finally {
            this.client.close();
        }
    }
}

module.exports = {
    MongoConnect
}