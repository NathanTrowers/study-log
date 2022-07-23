import { Router } from 'express';

const pingRouter = Router();

pingRouter.get('/', console.log('Yu jus ping mi, is waa\'m?'));

export default pingRouter;