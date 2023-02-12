const express = require('express')
require('dotenv').config()

const breadRoutes = require('./controllers/bread')

const app = express()
//MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/breads', breadRoutes)

const PORT = process.env.PORT
app.listen(PORT, console.log(`listening on port ${PORT} `))

