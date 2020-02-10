const express = require('express');
const server = express();
const controller = require('./controllers/controller');
const cors = require('cors');

server.use(cors());
server.use(express.json());
server.use('/api/employees', controller);

server.listen(3000, () => console.log('app is on !'));