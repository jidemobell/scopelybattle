require('dotenv').config()
const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors');
const {join} = require("path");


const app = express()
const playerRouter = require('./routes/player')
const leaderboardRouter = require('./routes/leaderboard')




app.use(express.json())
// eslint-disable-next-line no-undef
app.use(express.static(join(__dirname, 'public')));
app.use(cookieParser())
app.use(cors())

app.get('/', (req, res) => {
    res.send('hello scopely')
})
app.use('/api', playerRouter)
app.use('/api', leaderboardRouter)




module.exports = app
