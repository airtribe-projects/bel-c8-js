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

// If you need optimal performance then we will always use CALLBACKS and not PROMISES.
