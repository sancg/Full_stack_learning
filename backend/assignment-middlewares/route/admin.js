const express = require("express");

const route = express.Router();

route.get("/add-list", (req, res) => {
    res.send(
        `<form action="/my-listing" method="POST"><input type="text" name="kpop_band"><button type="submit">SEND</button></form>`
    );
});

route.post("/my-listing", (req, res, next) => {
    console.log({ data: req.body, params: req.params });
    res.redirect("/");
});

module.exports = route;
