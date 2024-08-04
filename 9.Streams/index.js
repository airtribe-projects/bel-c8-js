const fs = require("node:fs");

/*
const readableStream = fs.createReadStream("./GenerateFile/input.txt", {
  encoding: "utf-8",
  highWaterMark: 100000,
});

const writableStream = fs.createWriteStream("./GenerateFile/inputCopy.txt");

let i = 0;

readableStream.on("data", (chunk) => {
  console.log("recieved chunk of size " + i + chunk.length);
  i++;

  writableStream.write(chunk);
});
*/

// PIPES
/*
const readableStream = fs.createReadStream("./GenerateFile/input.txt", {
  encoding: "utf-8",
  highWaterMark: 100000,
});

const writableStream = fs.createWriteStream("./GenerateFile/inputCopy.txt");

readableStream.pipe(writableStream);
*/
