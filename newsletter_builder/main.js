// Author: Amay Kataria
// Date: 06/9/2021
// File: main.js
// Description: Local nodejs server, responsible to send newsletters to subscribes users. 

var mailgun = require('./mailgun.js');
console.log('Starting Newsletter Builder'); 
mailgun.sendNewsletter(); 