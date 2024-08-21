const path = require("path");
const bunyan = require("bunyan");

const level = process.env.MODE_LOGGING_LEVEL || "info";

const log = bunyan.createLogger({
    name: "node-app",
    streams:[
        {
            level,
            stream: process.stdout
        },
        {
            level,
            path: path.resolve(__dirname,".",".","logs.json")
        }

    ]
});

module.exports = log;