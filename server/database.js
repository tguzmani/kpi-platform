const mysql = require('mysql')
require('dotenv').config()

module.exports = mysql.createConnection({
  multipleStatements: true,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
})
