require('dotenv').config()
const express = require('express')
const port = process.env.NODE_ENV !== 'test' ?  process.env.PORT || 6600 : 3300
const cookieParser = require('cookie-parser')
const cors = require('cors');
const {join} = require("path");
const {configDotenv} = require("dotenv");



// const knex = require('./knex/knex');
const app = express()
const playerRouter = require('./routes/player')
// const authMiddleware = require("./middleware/auth");




app.use(express.json())
// eslint-disable-next-line no-undef
app.use(express.static(join(__dirname, 'public')));
app.use(cookieParser())
app.use(cors())

app.get('/welcome', (req, res) => {
    res.send('hello scopely')
})

// app.use(authMiddleware)
app.use('/api', playerRouter);




module.exports = app
