import operationOutcome from '../Constants/OperationOutcomeConstants.js';

class CrudUtils {
    constructor(client){
      this.client = client;
      this.response = {};
    };


    async createSession(query = {}) {
      try {
        await this.client.connect();
        const db = await this.client.db('StudyLog');
        this.response = await db('Login').updateOne(query);

        return {
          status: operationOutcome.SUCCESS,
          response: this.response
        }
      } catch (MongoNetworkError) {
        console.error('Something went wrong while creating the session');

        return {
          status: operationOutcome.FAILURE,
          response: MongoNetworkError
        }
      } finally {
        await this.client.close();

      }
    }
}

export default CrudUtils;

    // /**
    //  * Runs multi-collection insertions
    //  * @param {Object[]} query
    //  * @param {string} collectionOne
    //  * @param {string} collectionTwo
    //  * @returns {Object}
    //  */
    // async function runInsertTransaction(query, collectionOne,collectionTwo) {
    //     const client.startSession();

    //     try{
    //         await session.withTransaction(async () => {
    //             const db.collection(collectionOne);
    //             const db.collection(collectionTwo);

    //             await collOne.insertOne(query[0], { session });
    //             await collTwo.insertOne(query[1], { session });
    //         });

    //         console.log('Insertion transaction successfull!');
    //         status = SUCCESS;
    //         status };

    //         return his.response;
    //     } catch(error) {
    //         console.error(`An error occured while trying to run an insertion transaction in the database ${error}`);
    //         status = FAILURE;
    //         response = {
    //             status:status,
    //         };

    //         return his.response;
    //     } finally {
    //         await session.endSession();
    //         await his.client.close();
    //     }
    // }

    // /**
    //  * Rusn multi-collection deletions
    //  * @param {string[]} query
    //  * @param {string} collectionOne
    //  * @param {string} collectionTwo
    //  * @returns {string[]}
    //  */
    // async runDeleteTransaction(query, collectionOne,collectionTwo) {
    //     const client.startSession();

    //     try{
    //         await session.withTransaction(async () => {
    //             const db.collection(collectionOne);
    //             const db.collection(collectionTwo);

    //             await collOne.deleteOne(query[0], { session });
    //             await collTwo.deleteOne(query[1], { session });
    //         });

    //         console.log('Deletion transaction successfull!');
    //         status = SUCCESS;
    //         status };

    //         return his.response;
    //     } catch(error) {
    //         console.error(`An error occured while trying to run an deletion transaction in the database ${error}`);
    //         status = FAILURE;
    //         response = {
    //             status:status,
    //         };
            
    //         return his.response;
    //     } finally {
    //         await session.endSession();
    //         await his.client.close();
    //     }
    // }


    // /**
    //  * Creates one record
    //  * @param {Object} record
    //  * @param {string} collectionName
    //  * @return {Object}
    //  */
    // async function insertOne(record, collectionName) {
    //     try{
    //         await his.db
    //             .collection(collectionName)
    //             .insertOne(record);
            
    //         console.log('Record created!');
    //         status = SUCCESS;
    //         status };

    //         return his.response;
    //     } catch(error) {
    //         console.error(`An error occured while inserting a record into the database ${error}`); 
    //         status = FAILURE;
    //         response = {
    //             status:status,
    //             error: error
    //         };
            
    //         return his.response;
    //     } finally {
    //         client.close();
    //     }
    // }

    // /**
    //  * Edit one record
    //  * @param {Object} query
    //  * @param {Object} updates
    //  * @param {string} collectionName
    //  * @return {Object}
    //  */
    // async function editOne(query, updates, collectionName) {
    //     try{
    //         await his.db
    //             .collection(collectionName)
    //             .updateOne(query, updates);

    //         console.log('Record edited!');
    //         status = SUCCESS;
    //         status };

    //         return his.response;
    //     } catch(error) {
    //         console.error(`An error occured while modifying a record in the database ${error}`);
    //         status = FAILURE;
    //         response = {
    //             status:status,
    //             error: error
    //         };
            
    //         return his.response;
    //     } finally {
    //         client.close();
    //     }
    // }

    // /**
    //  * Deletes one or more record
    //  * @param {Object} record
    //  * @param {string} collectionName
    //  * @return {Object}
    //  */
    // async function deleteDocument(query, collectionName) {
    //     try{
    //         await his.db
    //             .collection(collectionName)
    //             .deleteMany(query);

    //         console.log('Record deleted!');
    //         status = SUCCESS;
    //         status };

    //         return response;
    //     } catch(error) {
    //         console.error(`An error occured while deleting a record from the database ${error}`);
    //         status = FAILURE;
    //         response = {
    //             status:status,
    //             error: error
    //         };
            
    //         return .response;
    //     } finally {
    //         client.close();
    //     }
    // }

