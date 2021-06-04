// Author: Amay Kataria
// Date: 06/4/2021
// File: main.js
// Description: Core Central server implementation for mumimsafe.live. It serves 2 routes primarily. 
// Route 1 = client -> central -> printer
// Route 2 = streamer -> central -> client
// It will also have a public side, which I can use to see all the messages of the database and debug the incoming video stream. 

var express = require('express'); 
var cors = require('cors');
var mailgun = require('./mailgun.js');

// ------------------ Express webserver ------------------------ //
var app = express(); 
app.use(cors());
// app.use(express.static('./Client')); 
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