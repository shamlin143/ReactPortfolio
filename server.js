const express = require('express');
const favicon = require('./node_modules/express-favicon');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();

const nodemailer = require('nodemailer');

app.use(favicon(__dirname + 'reactportfoliosh70/public/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'reactportfoliosh70')));
app.get('/ping', function (req, res) {
 return res.send('pong');
});
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public','index.html'));
});

   
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

app.listen(port);