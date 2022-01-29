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
server.use(express.json());
server.use(cors());

server.get("/login", Login.login(MongoClient, connection, bcrypt));

server.get("/register", Register.register(MongoClient, connection, bcrypt));

// server.get("/dashboard", );

server.get("/process_get", function(request, response) {

    criteria = { name: req.query.name }, { projection: { uid: 1, name: 1 } };
    var user =  StudyLog.showRecords("Users", criteria);
    var USER = JSON.parse(user);
    uid = USER.uid;

    content = {
        name: request.query.name
    };
    console.log(content);
    obj = JSON.parse(content);
    response.send(`Welcome ${obj.name}`);
    time.waitTime(res.redirect("/session.html"));
})

/*Create Log Page*/
server.get("/session.html", function(request, response) {
    console.log("User login request received from homepage.");
    response.sendFile(__dirname + "/" + "session.html");
})


server.post("/new_record", function(request, response) {


        StudyLog.addNewRecord("Sessions", )/***********************************************WORKING HERE: Accept data from the form and then do the CRUD.*/
        mongo.connect(url, { useUnifiedTopology: true }, function(err, db) {
            if (err) throw err;
            const sl = db.db("StudyLog");
            console.log("Connected to StudyLog");
            sl.collection("Sessions").insert() /***********************************************needs to be completed */
            var user = sl.collection("Users").findOne({ name: req.query.name }, { projection: { uid: 1, name: 1 } });
            var userS = JSON.parse(user);
            uid = userS.uid;
            db.close();
        })
        response = {
            name: req.query.name
        };
        console.log(response);
        obj = JSON.parse(response);
        res.send(`Welcome ${obj.name}`);
        time.waitTime(res.redirect("/session.html"));
    })
    /*View Log Pages*/
    //Query Page
    //Results Page

/*END*** routing section*/

//
/**/
/*N*** */

/*BEGIN***server set-up */ //Watch this section for potential bug
const activeServer = server.listen(3000, function() {
    const host = server.address().address;
    const port = server.address().port;
})

console.log(`The spirit library is located at http://${host}:${port}`);
/*END*** server set-up*/

//Module exports
module.exprots = activeServer;