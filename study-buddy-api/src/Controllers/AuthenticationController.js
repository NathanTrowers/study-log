'use strict';

import { success, clientError } from '../Constants/HttpCodeConstants.js';
import operationOutcome from '../Constants/OperationOutcomeConstants.js';
import validateLogin  from '../Validators/LoginValidator.js';
import validateRegistration  from '../Validators/RegistrationValidator.js';


export const isLoggedIn = (req, res, next) => {
    req.session.authorized
        ? next()
        : res.status(clientError.UNAUTHORIZED)
            .json({ 
                isLoggedIn: false
            });
}

export const shouldLogIn = (req, res) => {
    req.session.authorized
        ? res.status(success.OK)
            .json({ 
                isLoggedIn: true
            })
        : res.status(success.OK)
            .json({ 
                message: 'Hi there scholar, let\'s see those credentials!', 
                isLoggedIn: false
            });
}

export const login = async (req, res, next) => {
    try {
        const user = await validateLogin(req);
        if (!user) {
            throw Error('message: Login Attempt Failed');
        }

        res.status(success.ACCEPTED)
            .json({
                message: 'Login successful!',
                user: user
            });
    } catch (error) {
        console.error('%s \n code: %d', error, clientError.UNAUTHORIZED);

        res.status(clientError.BAD_REQUEST)
            .json({message: 'Login Attempt Failed!'});
    }

    next();
}

export const logout = (req, res) => {
    try{
        req.session.destroy();
        res.clearCookie('sessionId', { httpOnly: true });
        res.status(success.ACCEPTED)
            .json({ 
                isLoggedIn: false
            });
    } catch (error) {
        console.log('Something went wrong while logging out', error);
    }
}

export const register = async (req, res, next) => {
    try {
        const status = await validateRegistration(req);
        if (status !== operationOutcome.SUCCESS) {
            throw Error('message: Registration Attempt Failed');
        }

        res.status(success.ACCEPTED)
            .json({message: 'Registration successful!'});
    } catch (error) {
        console.error('%s \n code: %d', error, clientError.UNAUTHORIZED);

        res.status(clientError.BAD_REQUEST)
            .json({message: 'Registration Attempt Failed!'});
    }

    next();
}
