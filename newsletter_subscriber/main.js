// Author: Amay Kataria
// Date: 06/4/2021
// File: main.js
// Description: Core central server implementation for subscribing a new user to the mailing list and sending them
// the introduction email. The emails are stored as confirmation.html and introduction.html, which are parsed
// and dispatched using this server. This sits on herokuu. 

var express = require('express'); 
var cors = require('cors');
var mailgun = require('./mailgun.js');

// ------------------ Express webserver ------------------------ //
var app = express(); 
app.use(cors());
var server = require('http').createServer(app); 

// ------------------- Configure for POST request ------------- //
app.use(express.urlencoded({ 
    extended: true
}));
// Use this if sending json. 
// app.use(express.json());
app.use(express.text()); // Defines the type of data we want to receive. 

server.listen(process.env.PORT || 5000, function() {
    console.log('Newsbuilder webservice successfully started...'); 
});

// Simple get request. 
app.get('/', (req, res) => {
    console.log('Simple Get Request');
    res.send('Newsletter Subscriber Webserver Works!');
});

app.get('/confirmation', (req, res) => {
    let data = {
        'hash': req.query.hash,
        'email': req.query.email
    }; 
    mailgun.confirm(data, res); 
});

app.post('/subscribe', (req, res) => {
    console.log('POST Received. ');
    let email = req.body; 
    mailgun.handleEmail(email);
    res.sendStatus(200); // HTTP OK. 
});