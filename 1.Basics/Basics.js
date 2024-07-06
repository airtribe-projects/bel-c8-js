// 1. ASYNC and SYNC code

// SYNC -> Line by line, when the 1st line is done then only the second line would be done.

/*
let a = 12;
console.log(a);
*/

// ASYNC ->
/*
console.log("a");
setTimeout(() => {
    console.log("b");
}, 0);
console.log("c");
*/

// -------  IMPORT TECHNIQUE -----------
// import xyz from 'asdsadas'; // ES6
// requeire() // Common JS
