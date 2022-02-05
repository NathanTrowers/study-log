// const MongoCRUD = require("./Controller/MongoCRUD.js");
const express = require("express");
const cors = require('cors');

const time = require("$/study-buddy-api/src/Utility Classes/timer.js");
const Login = require('$/study-buddy-api/src/Components/Authentication/LoginController.js');
const Register = require('$/study-buddy-api/src/Components/Authentication/RegisterController.js');
const MongoClient = require("mongodb").MongoClient;
const { DATABASE_URL } = require("$/study-buddy-api/src/Constants/GeneralConstant");

const connection = `mongodb://${DATABASE_URL}`;

const server = express();
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get("/login", Login.login(MongoClient, connection, bcrypt));

server.get("/register", Register.register(MongoClient, connection, bcrypt));

// server.get("/dashboard", );


const activeServer = server.listen(3000, function() {
    const host = server.address().address;
    const port = server.address().port;
})

console.log(`The spirit library is located at http://${host}:${port}`);

module.exports = activeServer;