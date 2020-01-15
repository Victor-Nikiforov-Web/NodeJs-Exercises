const express = require('express');
const server = express();
const productsController = require('./controllers/products-controller');

server.use(express.json()); // create obj named body inside request.

server.use("/api/products" , productsController);

server.listen(3000, () => console.log('server listening on http://localhost:3000'));

