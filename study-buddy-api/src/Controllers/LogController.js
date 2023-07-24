'use strict';

import { success, clientError, serverError } from '../Constants/HttpCodeConstants.js';
import operationOutcome from '../Constants/OperationOutcomeConstants.js';
import { findLogs } from '../DatabaseConnector/MongoConnect.js';
import { validateNewLogInput, validateEditLogInput }from '../Validators/LogInputValidator.js'

export const editLog = async (req, res, next) => {
    try {
        const { status, validationErrors } = await validateEditLogInput(req.body);

        if (status === operationOutcome.FAILURE) {
            throw Error;
        }

        validationErrors.length > 0
            ? res.status(clientError.BAD_REQUEST)
                .json({ validationErrors })
            : res.status(success.ACCEPTED)
                .json({recordEdited: true});
    } catch (error) {
        res.status(serverError.INTERNAL_SERVER_ERROR)
        .json({
            message: 'An error occurred'
        });
    } finally {
        next();
    }
}

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

export const setNewLog = async (req, res, next) => {
    try {
        const { status, validationErrors } = await validateNewLogInput(req.body);

        if (status === operationOutcome.FAILURE) {
            throw Error;
        }

        validationErrors.length > 0
            ? res.status(clientError.BAD_REQUEST)
                .json({ validationErrors })
            : res.status(success.CREATED)
                .json({recordAdded: true});
    } catch (error) {
        res.status(serverError.INTERNAL_SERVER_ERROR)
        .json({
            message: 'An error occurred'
        });
    } finally {
        next();
    }
}
