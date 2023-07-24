'use strict';

import { Router } from 'express';
import { isLoggedIn } from '../Controllers/AuthenticationController.js';
import { editLog, getAllLogs, setNewLog } from '../Controllers/LogController.js';

const logRouter = Router();

logRouter.get('/logs', isLoggedIn, getAllLogs);
logRouter.post('/log', isLoggedIn, setNewLog);
logRouter.patch('/log/:id', isLoggedIn, editLog)

export default logRouter;
