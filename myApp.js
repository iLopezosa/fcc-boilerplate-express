require('dotenv').config();

let express = require('express');
let app = express();

console.log(process.env);
// Request Logger
app.use('/', (req, res, next) => { console.log(`${req.method} ${req.path} - ${req.ip}`); next(); });
// Static CSS resources
app.use('/public', express.static(__dirname + '/public'));
// JSON API
app.get('/json', (req, res) => res.json(
    process.env.MESSAGE_STYLE === 'uppercase' ? { message: 'HELLO JSON' } : { message: 'Hello json' }
));
// Index route
app.get("/", (req, res) => res.sendFile(__dirname + '/views/index.html'));
// Time server
app.get('/now', (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => res.json({ time: req.time }));
    



































 module.exports = app;
