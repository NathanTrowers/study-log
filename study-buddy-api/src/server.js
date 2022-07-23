import express from 'express';
import cors from 'cors';
import pingRouter from './Routes/PingRouter.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Routes
app.use('/ping', pingRouter);

// Network Connection
const host = process.env.ADDRESS;
const port = process.env.PORT;
app.listen(port);

console.log(`The spirit library is located at http://${host}:${port}`);

export default app;
