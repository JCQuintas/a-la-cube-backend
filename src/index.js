global.Promise = require('bluebird')
require('dotenv').config()

const app = require('./routes')

app.listen(process.env.PORT)
console.log('Api running on port: ' + process.env.PORT)
