/**
 * Created by garageposte5 on 18/05/2016.
 */
var express = require('express');
var http = require('http');

var swig = require('swig');
var swig = new swig.Swig();


var app = express();

var bodyParser = require('body-parser');
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded());     // to support URL-encoded bodies

// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
//     next();
// });


// app.set('views', '../build');
// app.engine('html', swig.renderFile);
// app.set('view engine', 'html');


var port = process.env.PORT || '3000';
app.set('port', port);

app.get('/', function(req,res){
    res.sendFile('/home/ubuntu/build/index.html');
});

app.get('/ping', function(req, res) {
    res.send("pong");
});

http.createServer(app).listen(port, function (err) {
    console.log('listening in http://localhost:' + port);
});

module.exports = app;