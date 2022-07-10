let express = require('express');
let app = express();
// Index route
app.get("/", (req, res) => res.sendFile(__dirname + '/views/index.html'));
// Static CSS resources
app.use('/public', express.static(__dirname + '/public'));
// JSON API
app.get('/json', (req, res) => res.json({ message: 'Hello json' }));




































 module.exports = app;
