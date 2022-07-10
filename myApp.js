require('dotenv').config();
let bodyParser = require('body-parser');

let express = require('express');
let app = express();

console.log(process.env);
// Request Logger
app.use('/', (req, res, next) => { console.log(`${req.method} ${req.path} - ${req.ip}`); next(); });
// Static CSS resources
app.use('/public', express.static(__dirname + '/public'));
// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
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
// Echo server route
app.get('/:word/echo', (req, res, next) => { res.json({ echo: req.params.word }); next();});
// Echo server query
const getName = (req, res, next) => { res.json({ name: req.query.first + ' ' + req.query.last }); next();}
const postName = (req, res, next) => { res.json({ name: req.body.first + ' ' + req.body.last }); next();}
app.route('/name').get(getName).post(postName);


































 module.exports = app;
