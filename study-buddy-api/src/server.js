const express = require("express");
const cors = require('cors');

// const Login = require('@src/Components/Authentication/LoginController.js');
const Register = require('./Components/Authentication/RegisterController.js');

const server = express();
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// server.get("/login", Login.login(MongoClient, connection, bcrypt));

server.get("/register", Register.register());

// server.get("/dashboard", );

const host = server.address().address;
const port = server.address().port;
const activeServer = server.listen(3000);

console.log(`The spirit library is located at http://${host}:${port}`);

module.exports = {
    activeServer
};
