'use strict';

import { Router } from 'express';
import { isLoggedIn } from '../Controllers/AuthenticationController.js';
import { getAllSessions } from '../Controllers/LogController.js';

const logRouter = Router();

logRouter.get('/logs', isLoggedIn, getAllSessions);

export default logRouter;
