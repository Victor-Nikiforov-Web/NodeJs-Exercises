const express = require('express');
const server = express();

const candies = [
    { name: "Kinder", price: 15, sweetness: "Very sweet", code: 1 },
    { name: "Milka", price: 12, sweetness: "Sweet", code: 2 },
    { name: "Shoko", price: 5, sweetness: "Very sweet", code: 3 }
];

server.get("/candies", (request, response) => {
    response.json(candies);
});

server.get("/candies/:id", (request, response) => {
    const id = +request.params.id;
    const candy = candies.find(c => c.code === id);
    response.json(candy);
});

server.listen(3000, console.log("Listened to http://localhost:3000"));