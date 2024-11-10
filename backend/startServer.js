require('dotenv').config({ path: './backend/.env' });
console.log("DB_CONNECTION_STRING:", process.env.DB_CONNECTION_STRING);
require('./server');