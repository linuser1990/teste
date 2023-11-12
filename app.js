const express = require('express')
const app = express()
const router = require('./routes')
require('dotenv').config()

app.use('/api',router)

app.get('/', (req,res) => {res.send('ok')})

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Define the 'views' directory to store your EJS files
app.set('views', __dirname + '/views');

app.listen(process.env.PORT)

console.log('Application running...')