import { Router } from 'express';
import healthCheckController from '../Controllers/HealthCheckController.js'
const healthCheckRouter = Router();

healthCheckRouter.get('/', healthCheckController);

export default healthCheckRouter;
