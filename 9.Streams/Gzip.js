const fs = require("node:fs");
const zlib = require("node:zlib");

const gZip = zlib.createGzip();

const readableStream = fs.createReadStream("./smallfile.txt", {
  encoding: "utf-8",
  highWaterMark: 100000,
});

const writableStream = fs.createWriteStream("./smallFile.txt.zip");

readableStream.pipe(gZip).pipe(writableStream);

// RULE
// readableStream.pipe(gZip).pipe(writableStream).pipe; // we cant do this
