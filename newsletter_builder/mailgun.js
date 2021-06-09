// Author: Amay Kataria
// Date: 06/09/2021
// File: mailgun.js
// Description: This component is responsible for mailgun API requests. 


const api_key = '80e67140480b75b4a73425facf0650be-19f318b0-80c807ab';
const validation_key = 'pubkey-741e3c7db48b09f35424e9d26aa25ac9';
const domain = 'amaykataria.com';

// Official mailing list: subscribers@amaykataria.com
// Note: Change this when you are ready to batch send your email. 
const mailingListName = 'testsubscribers@amaykataria.com';

// Give the newsletter html file that will be sent to the user. 
const newsletterFile = 'newsletter06-09-2021';

const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const fs = require('fs');
const mg = mailgun.client({
    username: 'api', 
    key: process.env.MAILGUN_API_KEY || api_key,
    public_key: process.env.MAILGUN_PUBLIC_KEY || validation_key
});

module.exports = {
    sendNewsletter: () => {
        let data = fs.readFileSync('./' + newsletterFile + '.html', 'utf8');
        mg.messages.create('amaykataria.com', {
            from: "Amay Kataria <studio@amaykataria.com>",
            to: 'studio@amaykataria.com',
            bcc: [mailingListName], // Send the email to this mailing list, so everybody gets copy of the email. 
            subject: "Newsletter - 06 - 09 - 2021",
            html: data
        })
        .then(msg => console.log(msg))
        .catch(err => console.log(err));
    }
}