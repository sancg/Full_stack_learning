const express = require("express");

const route = express.Router();

route.get("/my-listing", (req, res, next) => {
    res.send(`<h1> Listing Items </h1>`);
});

route.get("/", (req, res, next) => {
    res.send(`<h1>Home page</h1>`);
});

module.exports = route;
