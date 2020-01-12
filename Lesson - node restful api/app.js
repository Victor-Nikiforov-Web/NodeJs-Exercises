const express = require("express");

const server = express();

server.get("/weather", (request, response) => {
    const weather = {
        description: "Cool Weather",
        degrees: 20,
        location: "Israel"
    };
    response.json(weather);
});

server.get("/", (request, response) => {
    response.send("Welcome to our Meteorology Website .");
});

server.get("/weather-by-city/:city", (request, response) => {
    const city = request.params.city;
    response.send("It is cool weather in " + city + " tonight .");
});

server.get("/weather-by-country/:country", (request, response) => {
    const country = request.params.country;
    response.send("It is cool weather in " + country + " this morning .");
});

server.listen(3000, () => console.log("Listening on http://localhost:3000"));