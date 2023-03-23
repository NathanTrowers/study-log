'use strict';

import bcrypt from 'bcryptjs';
import { findUser } from '../DatabaseConnector/MongoConnect.js';
import operationOutcome from "../Constants/OperationOutcomeConstants.js";

const validateLogin = async (req) => {
    let {email, password: enteredPassword } = req.body;
    
    const emailFormat  = /[A-Za-z0-9.-]+?@[A-Za-z0-9.-]+?\.[a-z]{2,}/;
    if (!emailFormat.test(email)) {
        return null;
    }

    const query = await findUser({ email: email });
    if(query.status === operationOutcome.FAILURE) {
        return null;
    }

    const user = query.response
    let { password: passwordHash } = user;
    if (!bcrypt.compareSync(enteredPassword, passwordHash)) {
        return null;
    }

    req.session.user = user;
    req.session.authorized = true;

    return user;
}

export default validateLogin;
