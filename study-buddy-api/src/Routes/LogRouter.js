'use strict';

import { Router } from 'express';
import { isLoggedIn } from '../Controllers/AuthenticationController.js';
import { getAllLogs, setNewLog } from '../Controllers/LogController.js';

const logRouter = Router();

logRouter.get('/logs', isLoggedIn, getAllLogs);
logRouter.post('/log', isLoggedIn, setNewLog);

export default logRouter;
