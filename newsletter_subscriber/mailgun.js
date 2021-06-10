// Author: Amay Kataria
// Date: 06/04/2021
// File: mailgun.js
// Description: This component is responsible for mailgun API requests. 

const api_key = '80e67140480b75b4a73425facf0650be-19f318b0-80c807ab';
const validation_key = 'pubkey-741e3c7db48b09f35424e9d26aa25ac9';
const domain = 'amaykataria.com';
// Update this with the actual heroku URL once this is deployed. 
const siteURLLocal = 'http://localhost:5000';
const siteURLProd = 'https://newsletter-subscriber-01.herokuapp.com';
const siteURL = siteURLLocal; 
const mailingListName = 'subscribers@amaykataria.com';
const uniqueString = 'thisisareallyreallyreallyreallyreallylongstring';

const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const md5 = require('md5');
const fs = require('fs');
const mg = mailgun.client({
    username: 'api', 
    key: process.env.MAILGUN_API_KEY || api_key,
    public_key: process.env.MAILGUN_PUBLIC_KEY || validation_key
});
// URL to be replaced in the confirmation email. 
const urlRegex = /%value%/g; 
const unsubsubscribeRegex = /%custom_unsubscribe%/g; 

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
    },

    handleUnsubscribe: (d, response) => {
        let email = d['email'];
        
        // Send back html with an unsubscribe button that can be clicked and then
        // that leads to the actual unsubscribe beahvior.
        let data = fs.readFileSync('./unsubscribe.html', 'utf8');
        const urlToEmbed = siteURL + '/unsubconfirm?email=' + email;
        data = data.replace(urlRegex, urlToEmbed);
        response.send(data);
    },

    unsubConfirm: (data, response) => {
        let email = data['email'];
        updateMemberSubscription(email, response, false);
    }
}

function sendConfirmationEmail(email, hash) {
    const urlToEmbed = siteURL + '/confirmation?hash=' + hash + '&email=' + email;
    let data = fs.readFileSync('./confirmation.html', 'utf8');
    data = data.replace(urlRegex, urlToEmbed);

    mg.messages.create('amaykataria.com', {
        from: "Amay Kataria <studio@amaykataria.com>",
        to: [email],
        subject: "Newsletter Confirmation.",
        html: data
      })
      .then(msg => console.log(msg))
      .catch(err => console.log(err));
}

function addToMailingList(email, response) { 
    // Get member.
    mg.lists.members.getMember(mailingListName, email)
    .then(d => {
        console.log('Member exists');
        // Member exists and is subscribed. 
        if (d.subscribed) {
            console.log('Member exists and already subscribed. Thank you.');
            response.send('<html><h1>Thanks for your love, but you are already subscribed to this mailing list.</h1></html>');
        } else {
            // Member exists and is not subscribed. So subscribe it. 
            updateMemberSubscription(email, response, true);
        }
    }).catch(e => {
        // Member doesn't exist.
        console.log('Member does not exist. Adding member to the list.');
        addMemberToList(email);
    });
}


function updateMemberSubscription(email, response, subStatus) {
    var payload = {
        subscribed: subStatus
    };
    
    // Mailgun will automatically ignore similar emails. 
    mg.lists.members.updateMember(mailingListName, email, payload)
    .then(d => {
        console.log('Member updated successfully.');
        if (subStatus) {
            response.send('<html><h1>Thank You. Your email is successfully subscribed.</h2></html');
            sendWelcomeEmail(email); 
        } else {
            response.send('<html><h1>Thank You. Your email is successfully unsubscribed.</h2></html');
        }
    })
    .catch(e => {
        // Same email address will automatically be rejected
        // by the server and an error will be throw. 
        console.warn('Email unsubscription failed: ' + e);
        response.send('<html><h1>Sorry, could not unsubscribe. Something wrong happened.</h1></html>');
    });
}

function addMemberToList(email) {
    // Member can be in the mailing list but cannot be subscribed. 
    var data = {
        subscribed: true,
        address: email
    };
    
    // Mailgun will automatically ignore similar emails. 
    mg.lists.members.createMember(mailingListName, data)
    .then(d => {
        console.log('Email subscribed successfully.');
        response.send('<html><h1>Thanks for your love. Your email is successfully subscribed.</h2></html');
        
        // Now we can send the last email to the user. 
        sendWelcomeEmail(email); 
    })
    .catch(e => {
        // Same email address will automatically be rejected
        // by the server and an error will be throw. 
        console.warn('Email subscription failed: ' + e);
        response.send('<html><h1>Sorry, this email may already exist in the database.</h1></html>');
    });
}


function sendWelcomeEmail(email) {
    let data = fs.readFileSync('./introduction.html', 'utf8');
    const urlToEmbed = siteURL + '/unsubscribe?email=' + email;
    data = data.replace(unsubsubscribeRegex, urlToEmbed);
    
    mg.messages.create('amaykataria.com', {
        from: "Amay Kataria <studio@amaykataria.com>",
        to: [email],
        subject: "Welcome Note.",
        html: data
      })
      .then(msg => console.log(msg))
      .catch(err => console.log(err));
}