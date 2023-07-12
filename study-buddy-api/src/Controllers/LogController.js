'use strict';

import { success, clientError, serverError } from '../Constants/HttpCodeConstants.js';
import operationOutcome from '../Constants/OperationOutcomeConstants.js';
import { findLogs } from '../DatabaseConnector/MongoConnect.js';


export const getAllLogs = async (req, res, next) => {
    try {
        const logs = await findLogs(req.query.id);
        if (logs.status === operationOutcome.FAILURE) {
            throw Error;
        }

        !logs.response.length > 0
            ? res.status(clientError.NOT_FOUND)
                .json({ status: operationOutcome.FAILURE})
            : res.status(success.OK)
                .json({ logs });
    } catch (error) {
        res.status(serverError.INTERNAL_SERVER_ERROR)
            .json({
                message: 'An error occurred'
            });
    } finally {
        next();
    }
}
