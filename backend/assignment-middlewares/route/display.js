import path from "node:path";
import { Router } from "express";
import { root } from "../utils/root.js";

const route = Router();

route.get("/my-listing", (req, res, next) => {
    res.send(`<h1> Listing Items </h1>`);
});

route.get("/", (req, res, next) => {
    res.sendFile(path.join(root, "templates", "index.html"));
});

export default route;
