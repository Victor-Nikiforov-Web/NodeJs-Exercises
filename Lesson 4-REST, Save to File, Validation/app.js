const express = require("express");
const booksController = require("./controllers/books-controller");

const server = express();

server.use(express.json());
server.use("/api/books", booksController);

server.listen(3000, () => console.log("http://localhost:3000"));