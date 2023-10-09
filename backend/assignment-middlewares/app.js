const express = require("express");
const app = express();
const port = 3000;

app.use("/my-listing", (req, res, next) => {
    res.send(`<h1> Listing Items </h1>`);
});

app.use("/", (req, res, next) => {
    res.send(`<h1>Home page</h1>`);
});

app.get("/", (req, res) => {
    res.send({ data: "Great work" });
});

app.listen(port, () => {
    console.log(`App Running on port ${port}`);
});
