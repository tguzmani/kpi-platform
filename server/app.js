const express = require('express')
const connection = require('./database')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const path = require('path')
const cors = require('cors')

require('dotenv').config()

const useRoute = entity => {
  app.use(`/api/${entity}`, require(`./src/${entity}/${entity}.routes`))
}

// App initialization
const app = express()
connection.connect()

// Middleware
app.use(express.json({ extended: false }))
app.use(morgan('dev'))
app.use(cookieParser())
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
    methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD', 'DELETE'],
  })
)
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
  })
)

// Routes Middleware
routes = ['auth', 'admins', 'users', 'reports']
routes.forEach(route => useRoute(route))

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  )
}

// Listen
const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
