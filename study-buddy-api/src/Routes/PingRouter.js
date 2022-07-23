import { Router } from 'express';
import pingController from '../Controllers/PingController.js'
const pingRouter = Router();

pingRouter.get('/', pingController);

export default pingRouter;