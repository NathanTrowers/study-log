class CrudUtils {
    constructor(client){
      this.client = client;
      this.response = {};
    };

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


