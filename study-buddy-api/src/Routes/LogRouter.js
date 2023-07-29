'use strict';

import { Router } from 'express';
import { isLoggedIn } from '../Controllers/AuthenticationController.js';
import { deleteLog, editLog, getAllLogs, setNewLog } from '../Controllers/LogController.js';

const logRouter = Router();

logRouter.delete('/log/:id', isLoggedIn, deleteLog);
logRouter.get('/logs', isLoggedIn, getAllLogs);
logRouter.post('/log', isLoggedIn, setNewLog);
logRouter.patch('/log/:id', isLoggedIn, editLog)

export default logRouter;
