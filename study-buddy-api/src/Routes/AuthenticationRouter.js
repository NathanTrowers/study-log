'use strict';

import { Router } from 'express';
import { isLoggedIn, login, logout, register } from '../Controllers/AuthenticationController.js'
const authenticationRouter = Router();

authenticationRouter.get('/login', isLoggedIn);
authenticationRouter.post('/login', login);
authenticationRouter.post('/logout', logout);
authenticationRouter.post('/sign-up', register);

export default authenticationRouter;
