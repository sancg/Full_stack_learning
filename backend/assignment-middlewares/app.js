const express = require("express");
const bodyParser = require("body-parser");

const display = require("./route/display");
const admin = require("./route/admin");

const app = express();
const port = 3000;

// Watcher to incoming POST Request
app.use(bodyParser.urlencoded({ extended: false }));

app.use(display);
app.use(admin);

app.listen(port, () => {
    console.log(`App Running on port ${port}`);
});
