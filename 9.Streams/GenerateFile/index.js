const fs = require("fs");
const path = require("path");

const fileSizeInBytes = 1024 * 1024 * 1024; // 1 GB

const writableStream = fs.createWriteStream(
  path.join(__dirname, "input.txt"),
  "utf8"
);

// Generate random data
const generateRandomData = () => {
  let data = "";
  for (let i = 0; i < 1024; i++) {
    data += Math.random().toString(36).substring(2);
  }
  return data;
};

let bytesWritten = 0;

// Write random data to the file until the desired file size is reached
while (bytesWritten < fileSizeInBytes) {
  const randomData = generateRandomData();
  const remainingBytes = fileSizeInBytes - bytesWritten;
  const dataToWrite =
    remainingBytes > randomData.length
      ? randomData
      : randomData.slice(0, remainingBytes);
  writableStream.write(dataToWrite);
  bytesWritten += dataToWrite.length;
}

writableStream.end(() => {
  console.log("Input file created successfully.");
});
