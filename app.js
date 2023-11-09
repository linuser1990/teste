const express = require('express')
const app = express()
const router = require('./routes')

app.use('/api',router)

app.get('/', (req,res) => {res.send('ok')})

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Define the 'views' directory to store your EJS files
app.set('views', __dirname + '/views');

app.listen(4000)

console.log('Application running...')