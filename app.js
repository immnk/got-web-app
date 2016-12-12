
//This is the place where server is started.

var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var ejs = require('ejs');
var path = require('path');
var config = require('./config.js');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// This is used to serve the static files from the app directory
app.use(express.static(path.join(__dirname, 'public')));

var connection = mysql.createConnection({
    host: 'sql6.freemysqlhosting.net',
    user: config.DATABASE.USERNAME,
    password: config.DATABASE.PASSWORD,
    database: 'sql6148985',
    multipleStatements: true
});

app.connection = connection;
app.connection.connect(function (err) {
    if (err) {
        console.log('Error connecting to Db');
        return;
    }
    console.log('Connection to database done succesfully');
});
app.connection.query('USE sql6148985');
var routes = require("./routes/routes.js")(app);

// Load the home page on /
app.get('/', function (req, res) {
    ejs.renderFile('./views/homepage.ejs', function (err, result) {
        if (!err) {
            res.end(result);
        } else {
            res.end("An error occurred");
            console.log(err);
        }
    });
});

var server = app.listen(process.env.PORT || 5000, function() {
    console.log("Listening on port %s...", server.address().port);
});