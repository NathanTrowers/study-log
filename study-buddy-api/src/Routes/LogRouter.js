'use strict';

import { Router } from 'express';
import { isLoggedIn } from '../Controllers/AuthenticationController.js';
import { getAllLogs } from '../Controllers/LogController.js';

const logRouter = Router();

logRouter.get('/logs', isLoggedIn, getAllLogs);

export default logRouter;
