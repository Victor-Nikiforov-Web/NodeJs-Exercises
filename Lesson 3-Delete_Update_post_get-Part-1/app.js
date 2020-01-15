const express = require('express');
const server = express();

server.use(express.json()); // create obj named body inside request.

const products = [
    { id: 1, name: "Apple", price: 3.5 },
    { id: 2, name: "Banana", price: 5.7 },
    { id: 3, name: "Peach", price: 6.2 }
];

server.get("/api/products", (request, response) => {
    response.json(products);
});

server.get("/api/products/:id", (request, response) => {
    const id = +request.params.id;
    const product = products.find(p => p.id === id);
    response.json(product);
});

server.post("/api/products", (request, response) => {
    const product = request.body;
    product.id = products.length + 1;
    products.push(product);
    response.status(201).json(products);
});

server.put("/api/products/:id", (request, response) => {
    const id = +request.params.id;
    const product = request.body;
    const productToUpdate = products.find(p => p.id === id);
    productToUpdate.name = product.name;
    productToUpdate.price = product.price;
    response.json(productToUpdate);
});

server.patch("/api/products/:id", (request, response) => {
    const id = +request.params.id;
    const product = request.body;
    const productToUpdate = products.find(p => p.id === id);
    for (const prop in product) {
        if (prop in productToUpdate) {
            productToUpdate[prop] = product[prop];
        }
    }
    response.json(productToUpdate);
});

server.delete("/api/products/:id", (request, response) => {
    const id = +request.params.id;
    const index = products.findIndex(p => p.id === id);
    products.splice(index, 1);
    response.sendStatus(204);
});

server.listen(3000, () => console.log('server listening on http://localhost:3000'));

