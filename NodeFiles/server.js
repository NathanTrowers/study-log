/*BEGIN***Import important modules*/
const express = require("express");
const server = express();
const bodyParser = require("body-parser");
const mongo = require("mongodb").MongoClient;
/*END**Import important modules*/

/*BEGIN*** Variable Declarations*/
var uid;
var sid = 3;
/*END*** Variable Declarations*/

/*BEGIN*** Non Crud server processes*/
server.use(express.static("HTMLFiles"));
/*END*** Non Crud server processes*/

/*BEGIN***routing section */
/*Welcome/ Sign-in Page*/
server.get("/", function(req, res) {
    console.log("User login request received from homepage.");
    res.sendfile(__dirname + "/" + "index.html");
})

server.get("/process_get", function(req, res) {
        response = {

        }
    })
    /*Create Log Page*/

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