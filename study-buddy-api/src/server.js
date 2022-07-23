import express from 'express';
import cors from 'cors';
import pingRouter from './Routes/PingRouter.js';

const server = express();
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));


//Routes
app.use('/ping', pingRouter);

// Network Connection
const host = server.address().address;
const port = server.address().port;
const activeServer = server.listen(3000);

console.log(`The spirit library is located at http://${host}:${port}`);

module.exports = {
    activeServer
};
