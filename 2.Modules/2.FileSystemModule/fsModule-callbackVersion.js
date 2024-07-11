const fs = require("node:fs");

// --------- CREATE FILE -----------

fs.appendFile("./fileBlock/fileszz.txt", "HUGGEEEE CONTENET !!!!", (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("file is created");
  }
});

// --------- READING A FILE -----------------

fs.readFile("./fileBlock/fileszz.txt", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log("MY FILE DATA ||||");
    console.log(data);
    console.log(data.toString());
  }
});
