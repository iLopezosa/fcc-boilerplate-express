require('dotenv').config();

let express = require('express');
let app = express();

console.log('log: ' + process.env);
// Static CSS resources
app.use('/public', express.static(__dirname + '/public'));
// JSON API
app.get('/json', (req, res) => res.json(
    process.env.MESSAGE_STYLE === 'uppercase' ? { message: 'HELLO JSON' } : { message: 'Hello json' }
    ));
// Index route
app.get("/", (req, res) => res.sendFile(__dirname + '/views/index.html'));
    



































 module.exports = app;
