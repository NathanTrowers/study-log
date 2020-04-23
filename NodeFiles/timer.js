//import essential module
const datetime = require("node-datetime");

//Function that delays the execution of another function
exports.waitTime = function(work) {
    setTimeout(work, 5000);
}

//Function that records time stamps according to GMT
exports.recordTime = function() {
    var now = datetime.create();
    var dt = now.format("d-m-Y H:M:S");
    return dt;
}