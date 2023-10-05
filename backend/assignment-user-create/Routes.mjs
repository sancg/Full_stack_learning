import fs from "node:fs";
export const Routes = (req, res) => {
    const { url, method, headers } = req;
    let page;
    if (method === "GET") {
        let fileURL = "/";
        if (url === fileURL) {
            fileURL = "./templates/index.html";
            page = fs.createReadStream(fileURL);
            page.pipe(res);
            return;
        }

        if (url === "/users") {
            fileURL = "./templates/users.html";
            page = fs.createReadStream(fileURL);
            page.pipe(res);
            return;
        }

        res.statusCode = 404;
        res.end("<h1> Not found</h1>");
        return;
    }

    if (url === "/create-user" && method === "POST") {
        // Listen from the REQUEST to retrieve the data send by the Client
        const body = new Array();
        req.on("data", (chunk) => {
            body.push(chunk);
        });

        // After all the chunks are finished we can parse the result on
        // the Event Listener: End
        return req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(decodeURIComponent(parsedBody));
            return res.end();
        });
    }
};
