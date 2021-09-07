// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

//Initialize the main project folder
app.use(express.static('website'));

const port = 8000;
// Spin up the server
const server = app.listen(port, listening);
// const server = app.listen(port, () => { console.log(`running on localhost: ${port}`) })
// Callback to debug
function listening() {
    console.log("server running");
    console.log(`running on localhost: ${port}`)
};

// Create JS object
const appData = {}
// Respond with JS object when a GET request is made to the homepage
app.get('/all', function (req, res) {
  res.send(appData)
})

/* 
1. Routes & GET Requests
TODO-ROUTES! */
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.send('hello world');
});

// POST method route
app.post('/', function (req, res) {
    res.send('POST received')
});

//Setup a basic POST route in the server side code
const data = [];
app.post('/addMovie', addMovie)

function addMovie(req, res) {
    data.push(req.body)
    console.log(data)
}