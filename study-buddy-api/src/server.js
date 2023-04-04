'use strict'

import cors from 'cors';
import express from 'express';
import session from 'express-session';
import { v4 as uuidv4 } from 'uuid';
import authenticationRouter from './Routes/AuthenticationRouter.js';
import healthCheckRouter from './Routes/HealthCheckRouter.js';

const app = express();
app.use(cors({
    origin: 'http://localhost:3001'
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    resave:             false,
    saveUninitialized:  false,
    secret:             uuidv4(),
    cookie: {
        maxAge: 60000 * 60 * 60 * 24 //60 days 60 mins 60 sec 24 hrs
    }
}));

//Routes
app.use('/health', healthCheckRouter);
app.use('/auth', authenticationRouter);

app.get('/dummy', (req, res, next) => {
    res.json({message: "You are Logged In!"});

    next();
});

// Network Connection
const host = process.env.ADDRESS;
const port = process.env.PORT;
app.listen(port);
console.log(`The spirit library is located at http://${host}:${port}`);



export default app;
