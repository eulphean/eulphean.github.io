// Author: Amay Kataria
// Date: 06/04/2021
// File: mailgun.js
// Description: This component is responsible for mailgun API requests. 


const api_key = '80e67140480b75b4a73425facf0650be-19f318b0-80c807ab';
const validation_key = 'pubkey-741e3c7db48b09f35424e9d26aa25ac9';
const domain = 'amaykataria.com';
// Update this with the actual heroku URL once this is deployed. 
const siteURL = 'http://localhost:5000';
const mailingListName = 'subscribers@amaykataria.com';
const uniqueString = 'thisisareallyreallyreallyreallyreallylongstring';

const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const mg = mailgun.client({
    username: 'api', 
    key: process.env.MAILGUN_API_KEY || api_key,
    public_key: process.env.MAILGUN_PUBLIC_KEY || validation_key
});
var md5 = require('md5');

module.exports = {
    handleEmail: (email) => {
        let hash = md5(email+uniqueString); 
        sendConfirmationEmail(email, hash);
    },

    confirm: (data, response) => {
        let hash = data['hash'];
        let email = data['email'];
        let gHash = md5(email+uniqueString);
        if (hash === gHash) {
            addToMailingList(email, response);
        }
    }
}

// TODO: Clean up the email, which is sent. 
function sendConfirmationEmail(email, hash) {
    mg.messages.create('amaykataria.com', {
        from: "Amay Kataria <studio@amaykataria.com>",
        to: [email],
        subject: "Hello",
        text: "Testing some Mailgun awesomness!",
        html: '<p>Hello, please confirm you want to receive marketing emails from ' + domain + ' by clicking on the below link <p><a href=' + siteURL + '/confirmation?hash=' + hash + '&email=' + email +'>CONFIRMATION</a></p></p><p>'
      })
      .then(msg => console.log(msg))
      .catch(err => console.log(err));
}

function addToMailingList(email, response) {    
    // Member can be in the mailing list but cannot be subscribed. 
    var data = {
        subscribed: true,
        address: email
    };
    
    // Mailgun will automatically ignore similar emails. 
    mg.lists.members.createMember(mailingListName, data)
    .then(d => {
        console.log('Email subscribed successfully.');
        response.send('Thank You. Your email is successfully subscribed.');
        
        // Now we can send the last email to the user. 
        sendWelcomeEmail(); 
    })
    .catch(e => {
        // Same email address will automatically be rejected
        // by the server and an error will be throw. 
        console.warn('Email subscription failed: ' + e);
        response.send('Sorry, this email may already exist in the database.');
    });
}

// TODO: Clean up this email, which is sent to the user. 
function sendWelcomeEmail() {
    // Unsubscribe option must be there. 
    // Analytics on who opened the email. 
}