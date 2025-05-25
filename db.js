const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 5432,
});

module.exports = pool;
// This module exports a configured PostgreSQL connection pool using the 'pg' library.
// It reads database connection details from environment variables defined in a .env file.