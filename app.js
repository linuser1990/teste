const express = require('express')
const app = express()
const router = require('./routes')
require('dotenv').config()
const body_parser = require('body-parser')
const session = require('express-session');

// Set up session middleware
app.use(session({
    secret: 'your-secret-key', // Change this to a secret key
    resave: false,
    saveUninitialized: true
  }));

app.use(body_parser.json())
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

app.use('/api',router)

app.get('/', (req,res) => {res.send('ok')})

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Define the 'views' directory to store your EJS files
app.set('views', __dirname + '/views');

app.listen(process.env.PORT)

console.log('Application running...')