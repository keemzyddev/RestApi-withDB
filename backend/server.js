const express = require('express');
const dotenv = require('dotenv').config()
const routes = require('./routes/goalRoutes')
const {errorHandler} = require('./middleware/errorMiddleware')
const port= process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', routes)

app.use(errorHandler)



app.listen(port)