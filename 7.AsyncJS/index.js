// --------- TIMER ------

/*
    1. setInterval
    2. setTimeout
    3. setImmediate
*/

// EXAMPLE 1:

/*console.log("a");
setTimeout(() => {
  console.log("c");
}, 5000);

console.log("b");
*/

/*
    ANSWER

    a
    b
    c (after min 5 sec).

*/

// EXAMPLE 2:

/*
console.log("a");
setImmediate(() => {
  console.log("c");
});

console.log("b");
*/

/*

    a
    b
    c

*/

// --------------- EVENT LOOP ------------

// EXAMPLE 1:

/*
console.log("a");

process.nextTick(() => {
  console.log("Process next tick 1");
});

console.log("c");
*/

/*
    ANSWER
    a 
    c
    Process next tick 1

*/

// EXAMPLE 2:

/*
console.log("a");

// 1ms
setTimeout(() => {
  console.log("Settimeout");
}, 0);

process.nextTick(() => {
  console.log("Process next tick 1");
});

console.log("c");
*/

/*
    ANSWER
    a 
    c
    Process next tick 1
    Settimeout
*/

// EXAMPLE 3:

/*
console.log("a");

// 1ms
setTimeout(() => {
  console.log("Settimeout");
}, 0);

process.nextTick(() => {
  console.log("Process next tick 1");
});

process.nextTick(() => {
  console.log("Process next tick 2");
});

console.log("c");
*/

/*
    ANSWER

    a
    c
    Process next tick 1
    Process next tick 2
    Settimeout


*/

// EXAMPLE 4:

/*
console.log("a");

// 1ms
setTimeout(() => {
  console.log("Settimeout 1");
  process.nextTick(() => {
    console.log("Process next tick 2 inside setiemout 1");
  });
}, 0);

setTimeout(() => {
  console.log("Settimeout 2");
}, 0);

process.nextTick(() => {
  console.log("Process next tick 1");
});

console.log("c");
*/

/*
    ANSWER
    a
    c
    Process next tick 1
    Settimeout 1
    Process next tick 2 inside setiemout 1
    Settimeout 2
*/

// EXAMPLE 5:

/*
console.log("a");

setTimeout(() => {
  console.log("Settimeout 1");
  process.nextTick(() => {
    console.log("Process next tick 2 inside setiemout 1");
  });
}, 0);

Promise.resolve().then(() => {
  console.log("promise 1");
});

process.nextTick(() => {
  console.log("Process next tick 1");
});

Promise.resolve().then(() => {
  console.log("promise 2");
});

console.log("b");
*/

/*
    ANSWER

    a
    b
    Process next tick 1
    promise 1
    promise 2
    Settimeout 1
    Process next tick 2 inside setiemout 1
*/

// EXAMPLE 5:

/*
const fs = require("node:fs");

console.log("a");
fs.readFile("./file.txt", (error, data) => {
  //
  console.log(data.toString());
});
console.log("b");

*/

// EXAMPLE 6:
/*
const fs = require("node:fs");
console.log("a");

process.nextTick(() => {
  console.log("PROCESS NEXT 1");
});

setImmediate(() => {
  console.log("set immediate 1");
});

setTimeout(() => {
  console.log("setitmeout 1");
}, 0);

fs.readFile("./file.txt", (error, data) => {
  console.log("FILE READ 1");
});

console.log("b");
*/

// Answer

// EXAMPLE 7: ----- > ANOMALY
/*
console.log("a");
setTimeout(() => {
  console.log("this is settimeout1");
}, 0);
setImmediate(() => {
  console.log("this is immediate");
});
console.log("b");
*/

// ANSWER:
/*
a
b
this is settimeout1
this is immediate
 */

/*
a
b
this is immediate
this is settimeout1
*/

// // EXAMPLE 8: ----- > ANOMALY SOLUTION
/*
SOL 1:
setTimeout(() => {
  console.log("this is settimeout1");
  setImmediate(() => {
    console.log("this is immediate");
  });
}, 0);

console.log("b");
*/

/*
  SOL 2: 
  setTimeout(() => {
    console.log("this is settimeout1");
  }, 0);

  setImmediate(() => {
    console.log("this is immediate");
  });

  for (let i = 0; i < 1000000000; i++) {}
*/

// SOL 3 -> TRY WITH ASYNC AWAIT AS WELL

const setTimeOut = () =>
  new Promise((res, rej) => {
    setTimeout(() => {
      console.log("setTimeout");
      res();
    }, 100);
  });
const immediate = () =>
  new Promise((res, rej) => {
    setTimeout(() => {
      console.log("setImmediate");
      res();
    }, 0);
  });
setTimeOut()
  .then(() => immediate())
  .then(() => {
    console.log("Both completed");
  });

// TODO: LINK to REPO ->
