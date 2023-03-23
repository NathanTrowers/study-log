'use strict';

import { Router } from 'express';
import { login, isLoggedIn} from '../Controllers/AuthenticationController.js'
const authenticationRouter = Router();

authenticationRouter.get('/login', isLoggedIn);
authenticationRouter.post('/login', login);

export default authenticationRouter;
