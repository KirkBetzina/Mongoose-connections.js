// import mongoose
const mongoose = require('mongoose')

//connection URI
const mongoURI = 'mongodb://localhost:27017' + 'tweets'

/// configs
const config = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
}
// connect to URI
mongoose.connect(mongoURI, config)
// connect to the DB connection
const db = mongoose.connection
// additional connection messages
db.on('error', (err) => console.log(err.message + ' is mongod not running'))
db.on('connected', () => console.log('mongo connected: ', mongoURI))
db.on('disconnected', () => console.log('mongo disconnected'))

