'use strict';

import bcrypt from 'bcryptjs';
import { createUser, findUser } from '../DatabaseConnector/MongoConnect.js';
import operationOutcome from "../Constants/OperationOutcomeConstants.js";

const validateRegistration = async (req) => {
    let { email, password, userName } = req.body;
    
    const emailFormat  = /[A-Za-z0-9.-]+?@[A-Za-z0-9.-]+?\.[a-z]{2,}/;
    const passwordFormat = /^[A-Za-z0-9\.\-\@\!\?]{8,15}$/;
    const userNameFormat = /^[A-Za-z0-9 \-]{5,}$/;
    if (
        !emailFormat.test(email) ||
        !passwordFormat.test(password) ||
        !userNameFormat.test(userName)
    ) {
        return operationOutcome.FAILURE;
    }
    const query = await findUser(email);
    if(query.response) {
        return operationOutcome.FAILURE;
    }
    const hashedPassword = bcrypt.hashSync(password, 10);
    const response = await createUser(email, hashedPassword, userName);
    if (response.status !== operationOutcome.SUCCESS) {
        return operationOutcome.FAILURE;
    }

    return response.status;
}

export default validateRegistration;
