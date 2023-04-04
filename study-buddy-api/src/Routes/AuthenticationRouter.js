'use strict';

import { Router } from 'express';
import { isLoggedIn, login, logout } from '../Controllers/AuthenticationController.js'
const authenticationRouter = Router();

authenticationRouter.get('/login', isLoggedIn);
authenticationRouter.post('/login', login);
authenticationRouter.post('/logout', logout);

export default authenticationRouter;
