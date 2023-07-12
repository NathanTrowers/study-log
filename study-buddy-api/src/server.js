'use strict'

import cors from 'cors';
import ConnectMongoDBSession from 'connect-mongodb-session';
import express from 'express';
import session from 'express-session';
import { v4 as uuidv4 } from 'uuid';
import { DATABASE_URL, DATABASE_NAME } from './Constants/GeneralConstants.js';
import authenticationRouter from './Routes/AuthenticationRouter.js';
import healthCheckRouter from './Routes/HealthCheckRouter.js';
import logRouter from './Routes/LogRouter.js';

const app = express();

const MongoDBStore = ConnectMongoDBSession(session)
const sessionStore = new MongoDBStore(
    {
        uri:            DATABASE_URL,
        databaseName:   DATABASE_NAME,
        colletion:      'Session',
        connectionOptions: {
            useUnifiedTopology: true
        }
    },
    error => {
        //this callback function catches errors
    }
);
sessionStore.on('error', error => {
    console.log('An error occurred relating to the session storage: \n', error);
});

app.use(cors({
    origin: 'http://localhost:3001',
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    cookie: {
        httpOnly:   true,
        maxAge:     60000 * 60 * 60 * 24 //60 days 60 mins 60 sec 24 hrs
    },
    name:               'sessionId',
    resave:             false,
    saveUninitialized:  false,
    secret:             uuidv4(),
    store:              sessionStore
}));

//Routes
app.use('/health', healthCheckRouter);
app.use('/auth', authenticationRouter);
app.use(logRouter);

// Network Connection
const host = process.env.ADDRESS;
const port = process.env.PORT;
app.listen(port);
console.log(`The spirit library is located at http://${host}:${port}`);



export default app;
