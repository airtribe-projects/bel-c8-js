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

// DEBUGGING
// ---- CHROME DEBUGGING
// 1. node --inspect-brk index.js
// 2. go to chrome type chorme://inspect in address bar
// 3. click on inspect.

// ------ VS code devugging
// 1. open ctrl + ,;
// 2. search for auto attach
// 3 . select only with flag from dropdown
// 4. node --inspect index.js
