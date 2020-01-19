const express = require("express");
const booksLogic = require("../business-logic-layer/books-logic");
const router = express.Router();
const BookModel = require("../models/book-model");

router.get("/", async (request, response) => {
    try {
        const books = await booksLogic.getAllBooksAsync();
        response.json(books);
    }
    catch (error) {
        response.status(500).send(error.message);
    }
});

router.get("/:id", async (request, response) => {
    try {
        const id = +request.params.id;
        const book = await booksLogic.getOneBookAsync(id);
        response.json(book);
    }
    catch (error) {
        response.status(500).send(error.message);
    }
});

router.post("/", async (request, response) => {
    try {
        const book = request.body;
        const errors = BookModel.validate(book);
        if (errors) {
            response.status(400).send(errors);
            return;
        }
        const addedBook = await booksLogic.addBookAsync(book);
        response.status(201).json(addedBook);
    }
    catch (error) {
        response.status(500).send(error.message);
    }
});

router.put("/:id", async (request, response) => {
    try {
        const id = +request.params.id;
        const book = request.body;
        book.id = id;
        const updatedBook = await booksLogic.updateBookAsync(book);
        if (!updatedBook) {
            response.sendStatus(404);
        }
        response.json(updatedBook);
    }
    catch (error) {
        response.status(500).send(error.message);
    }
});

router.patch("/:id", async (request, response) => {
    try {
        const id = +request.params.id;
        const book = request.body;
        book.id = id;
        const updatedBook = await booksLogic.updateBookAsync(book);
        if (!updatedBook) {
            response.sendStatus(404);
        }
        response.json(updatedBook);
    }
    catch (error) {
        response.status(500).send(error.message);
    }
});

router.delete("/:id", async (request, response) => {
    try {
        const id = +request.params.id;
        await booksLogic.deleteBookAsync(id);
        response.sendStatus(204);
    }
    catch (error) {
        response.status(500).send(error.message);
    }
});

module.exports = router;