import http from "node:http";

const PORT = 8000;
const HOST = "localhost";
const APP = http.createServer((req, res) => {
    // Routes(res, req);
});

APP.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});
