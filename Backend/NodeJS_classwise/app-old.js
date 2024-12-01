import http from "http"
import path from "path";
import fs from "fs"
import os from "os"
import "./module.js"
import add from "./module.js";
const controller = (req, res) => {
    console.log(path, fs, os);
    console.log(req.body);

    if (req.url.includes("welcome")) {
        res.statusCode = 200;
        res.end("Welcome to my Backend Server")
    } else {
        res.statusCode = 404;
        res.end("404 Not Found")
    }
}

console.log(add())
const server = http.createServer(controller)

server.listen(5000, () => console.log("server up and running!"));


