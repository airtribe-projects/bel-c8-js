const fsPromise = require("node:fs").promises;

// OS
fsPromise
  .readFile("./fileBlock/fileszzasdadsadasdsadsadsadsadasdasdas.txt")
  .then((data) => {
    console.log(data);
    console.log(data.toString());
  })
  .catch((error) => {
    console.log("error in reading file");
  });
