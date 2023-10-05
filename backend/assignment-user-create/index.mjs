import http from "node:http";

import { Routes } from "./Routes.mjs";
const PORT = 8000;
const HOST = "localhost";
const APP = http.createServer((req, res) => {
    Routes(req, res);
});

APP.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});
