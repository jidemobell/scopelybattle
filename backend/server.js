require('dotenv').config()
const app = require('./app')
const port = process.env.NODE_ENV !== 'test' ?  process.env.PORT || 6600 : 3300

app.listen(port, (req, res) => {
    console.log('CORS enabled server listening on ' + port)
})
