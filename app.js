require('dotenv').config();
const Server = require('./src/www/server');

const server = new Server();

server.listen();