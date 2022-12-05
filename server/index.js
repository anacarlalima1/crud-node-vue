const express = require('express')
const routes = require('./server/routes.js')
const app = express()
const cors = require('cors')


require('./server/database')

app.use(express.json())
app.use(routes)
app.use(cors())

app.listen(5000)