'use strict';

import mongo from "mongodb";
import { v4 as uuidv4 } from 'uuid';
import { DATABASE_URL, DATABASE_NAME } from "../Constants/GeneralConstants.js";
import operationOutcome from "../Constants/OperationOutcomeConstants.js";

const { MongoClient } = mongo; 

export const createUser = async (email, hashedPassword, userName) => {
  const client = new MongoClient(DATABASE_URL, { useUnifiedTopology: true });

  try {
      await client.connect();
      console.log("Connected to database");

      const response = await client.db(DATABASE_NAME)
          .collection('Login')
          .insertOne({
            _id: uuidv4(),
            email: email, 
            password: hashedPassword,
            name: userName,
            dateCreated: new Date().toISOString()
          });
      console.log("createUser successful");

      return {
          status:   operationOutcome.SUCCESS,
          response: response
      };
    } catch (MongoNetworkError) {
      console.error('Something went wrong while finding the user.', MongoNetworkError)

      return {
        status:   operationOutcome.FAILURE,
        response: MongoNetworkError
      };
    } finally {
      client.close();
      console.log("Database connection closed");
    }
}

export const deleteSingleLog = async (id, userId) => {
  const client = new MongoClient(DATABASE_URL, { useUnifiedTopology: true });

  try {
      await client.connect();
      console.log("Connected to database");

      const response = await client.db(DATABASE_NAME)
          .collection('Log')
          .deleteOne({
            _id:    id,
            userId: userId
          });

      if (response.deletedCount === 0) {
        console.log("deleteSingleLog failed");

        return operationOutcome.FAILURE;
      }

      console.log("deleteSingleLog successful");

      return operationOutcome.SUCCESS;
    } catch (MongoNetworkError) {
      console.error('Something went wrong while deleting the log.', MongoNetworkError)

      return operationOutcome.FAILURE;
    } finally {
      client.close();
      console.log("Database connection closed");
    }
}

export const editExistingLog = async (logId, userId, subject, 
  details, ratedUnderstanding)  => {
    const client = new MongoClient(DATABASE_URL, { useUnifiedTopology: true });
  
    try {
        await client.connect();
        console.log("Connected to database");
        
        await client.db(DATABASE_NAME)
          .collection('Log')
          .updateOne({
              userId: userId,
              _id: logId
            },
            { $set: { 
                subject: subject,
                details: details,
                ratedUnderstanding: ratedUnderstanding,
              }
          });
        console.log("editExistingLog successful");
  
        return operationOutcome.SUCCESS;
      } catch (MongoNetworkError) {
        console.error('Something went wrong while updating the log.', MongoNetworkError)
  
        return operationOutcome.FAILURE;
      } finally {
        client.close();
        console.log("Database connection closed");
      }
  }

export const findUser = async email => {
    const client = new MongoClient(DATABASE_URL, { useUnifiedTopology: true });

    try {
        await client.connect();
        console.log("Connected to database");

        const response = await client.db(DATABASE_NAME)
            .collection('Login')
            .findOne({ email: email });
        console.log("findUser successful");

        return {
            status:   operationOutcome.SUCCESS,
            response: response
        };
      } catch (MongoNetworkError) {
        console.error('Something went wrong while finding the user.', MongoNetworkError)

        return {
          status:   operationOutcome.FAILURE,
          response: MongoNetworkError
        };
      } finally {
        client.close();
        console.log("Database connection closed");
      }
}

export const findLogs = async id => {
  const client = new MongoClient(DATABASE_URL, { useUnifiedTopology: true });

  try {
      await client.connect();
      console.log("Connected to database");
      
      const response = await client.db(DATABASE_NAME)
        .collection('Log')
        .find({ userId: id })
        .toArray();
      console.log("findLogs successful");

      return {
          status:   operationOutcome.SUCCESS,
          response: response
      };
    } catch (MongoNetworkError) {
      console.error('Something went wrong while finding the logs.', MongoNetworkError)

      return {
        status:   operationOutcome.FAILURE,
        response: MongoNetworkError
      };
    } finally {
      client.close();
      console.log("Database connection closed");
    }
}

export const saveNewLog = async (userId, subject, details,
  ratedUnderstanding, duration, date, 
  startTime, endTime) => {
  const client = new MongoClient(DATABASE_URL, { useUnifiedTopology: true });

  try {
      await client.connect();
      console.log("Connected to database");
      
      await client.db(DATABASE_NAME)
        .collection('Log')
        .insertOne({ 
          _id: uuidv4(),
          userId: userId,
          subject: subject,
          details: details,
          ratedUnderstanding: ratedUnderstanding,
          duration: duration,
          date: date,
          startTime: startTime,
          endTime: endTime
         });
      console.log("Operation successful");

      return operationOutcome.SUCCESS;
    } catch (MongoNetworkError) {
      console.error('Something went wrong while finding the logs.', MongoNetworkError)

      return operationOutcome.FAILURE;
    } finally {
      client.close();
      console.log("Database connection closed");
    }
}
