const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const connectDB = require('./config/db')
const passport = require('passport')
const bodyParser = require('body-parser')

const routes = require('./routes/index')


//function for connecting db as soon as the server starts
connectDB()

const app = express()

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(routes)


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server Running in ${process.env.NODE_ENV} on port ${PORT}`))

