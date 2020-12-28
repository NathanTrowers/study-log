/*BEGIN***Import important modules*/
const MongoCRUD = require("./MongoCRUD.js");
const express = require("express");
const server = express();
const bodyParser = require("body-parser");
const time = require("./timer.js");
/*END**Import important modules*/

/*BEGIN*** Variable Declarations*/
var uid;
var sid = 3;
var obj;
var response;
const StudyLog = new MongoCRUD();
let criteria;
/*END*** Variable Declarations*/

/*BEGIN*** Non Crud server processes*/
server.use(express.static("HTMLFiles"));
/*END*** Non Crud server processes*/

/*BEGIN***routing section */
/*Welcome/ Sign-in Page*/
server.get("/", function(req, res) {
    console.log("User login request received from homepage.");
    res.sendFile(__dirname + "/" + "index.html");
})

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
server.get("/session.html", function(req, res) {
    console.log("User login request received from homepage.");
    res.sendFile(__dirname + "/" + "session.html");
})


server.post("/process_get2", function(req, res) {
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

console.log(`The StudyLog server is listening at http://${host}:${port}`);
/*END*** server set-up*/

//Module exports
module.exprots = activeServer;