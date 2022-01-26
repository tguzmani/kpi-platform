const express = require('express')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const connect = require('./database')

require('dotenv').config()

const useRoute = entity => {
  app.use(`/api/${entity}`, require(`./src/${entity}/${entity}.routes`))
}

// App initialization
const app = express()

// Middleware
app.use(express.json({ extended: false }))
app.use(morgan('dev'))
app.use(cookieParser())
app.use(
  cors({
    origin: [
      'http://localhost:3000',
      'http://testclient.kpi.com',
      'http://testclientqa.kpimanagers.com',
    ],
    credentials: true,
  })
)

// Routes Middleware
routes = ['admins', 'users', 'reports', 'powerbi', 'workspaces', 'contracts']
routes.forEach(route => useRoute(route))

// Listen
const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

function keepMySQLAlive() {
  connect.connect()
  console.log('Ping MySQL')
}

const ONE_SECOND = 1000

setInterval(keepMySQLAlive, ONE_SECOND * 10)
