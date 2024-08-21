const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));


const APIKey = 'APIKey';
const ListID = 'ListID';
const Url = `https://us8.api.mailchimp.com/3.0/lists/${ListID}`;

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/signup.html');
})

app.post('/', function (req, res){
    const fName = req.body.fName;
    const lName = req.body.lName;
    const email = req.body.email;

    const data = {
        members: [
            {
                email_address: email,
                status: 'subscribed',
                merge_fields: {
                    FNAME: fName,
                    LNAME: lName
                }
            }
        ]
    }

    const jsonData = JSON.stringify(data);

    const options = {
        method : 'POST',
        auth : 'anything:' + APIKey
    }

    const request = https.request(Url, options, function(response) {

        if (response.statusCode === 200) {
            res.sendFile(__dirname + '/success.html');
        } else {
            res.sendFile(__dirname + '/failure.html');
        }

        response.on('data', function(data) {
            console.log(JSON.parse(data));
        })
    })

    request.write(jsonData);
    request.end();

})

app.post('/failure', function (req, res){
    res.redirect('/');
})

app.listen(3000, function () {
    console.log("Server is running on port 3000");
})