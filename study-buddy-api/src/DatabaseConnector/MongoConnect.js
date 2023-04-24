'use strict';

import mongo from "mongodb";
import { v4 as uuidv4 } from 'uuid';
import { DATABASE_URL } from "../Constants/GeneralConstants.js";
import operationOutcome from "../Constants/OperationOutcomeConstants.js";

const { MongoClient } = mongo; 

export async function findUser(email) {
    const client = new MongoClient(DATABASE_URL, { useUnifiedTopology: true });

    try {
        await client.connect();
        console.log("Connected to database");

        const response = await client.db('StudyLog')
            .collection('Login')
            .findOne({ email: email });
        console.log("Operation successfull");

        return {
            status:   operationOutcome.SUCCESS,
            response: response
        };
      } catch(MongoNetworkError) {
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

export const createUser = async (email, hashedPassword, userName) => {
  const client = new MongoClient(DATABASE_URL, { useUnifiedTopology: true });

  try {
      await client.connect();
      console.log("Connected to database");

      const response = await client.db('StudyLog')
          .collection('Login')
          .insertOne({
            _id: uuidv4(),
            email: email, 
            password: hashedPassword,
            name: userName,
            dateCreated: new Date().toISOString()
          });
      console.log("Operation successfull");

      return {
          status:   operationOutcome.SUCCESS,
          response: response
      };
    } catch(MongoNetworkError) {
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
