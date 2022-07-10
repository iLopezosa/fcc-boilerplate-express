import 'dotenv/config';
import express from 'express';

let express = require('express');
let app = express();

console.log('log: ' + process.env.MESSAGE_STYLE);

// Index route
app.get("/", (req, res) => res.sendFile(__dirname + '/views/index.html'));
// Static CSS resources
app.use('/public', express.static(__dirname + '/public'));
// JSON API
app.get('/json', (req, res) => res.json(
    process.env.MESSAGE_STYLE === 'uppercase' ? { message: 'HELLO JSON' } : { message: 'Hello json' }
));





































 module.exports = app;
