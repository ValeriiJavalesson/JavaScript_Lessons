var express = require('express');
var bodyParser = require("body-parser");

var server = express();
var jsonParser = bodyParser.json();
server.use(jsonParser);

server.use(express.static(__dirname));

server.get("/", function (req, resp) {
    console.log("Start page requested.");
});

server.get("/formGet", function (req, resp) {
    console.log("Form receipted by GET.");
    var obj = req.query;
    console.log(obj.LastName += ".ValidatedByGET");
    console.log(obj.FirstName += ".ValidatedByGET");
    console.log(obj.Age += ".ValidatedByGET");
    console.log(obj.Address += ".ValidatedByGET");
    resp.send("Ajax GET method is successfully completed: "+ JSON.stringify(obj));
});

server.post("/formPost", function(req, resp) {
    console.log("Form receipted by POST.");
    var obj = req.body;
	console.log(obj.LastName += ".ValidatedByPOST");
	console.log(obj.FirstName += ".ValidatedByPOST");
	console.log(obj.Age += ".ValidatedByPOST");
	console.log(obj.Address += ".ValidatedByPOST"); 
	resp.send("Ajax POST method is successfully completed: "+ JSON.stringify(obj));
});

server.listen(3000); 