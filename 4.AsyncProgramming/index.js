/*console.log("a");
setTimeout(() => {
  console.log("b");
}, 2000);

console.log("c");
*/

// --------  Higher Order Functions  ------------
// 1. A function which can take a FUNCTION as arguments.
// 2. a funciton that returns a function as a value.

/*
// sumAbc is HOF
function sumAbc(a, b) {
  function inner() {}

  return inner;
}

// sumObj is HOF
function sumObj(a, b, c) {}

sumObj(1, 2, () => {
  console.log("asdasdas");
});
// c is a callback function

*/

/*  JUST AN EXAMPLE OF CALLBACK FUNCTION 
const ob = {
  name: "utkarsh",
  age: 20,
  phone: 88385772,
  productMrp: 6000,
};

function thankyouEmail() {
  console.log("thanks you in chinese");
}

Googleservices.log(ob, thankyouEmail);

// tODO: Read about inversion of control






function Googleservices(userObj, fun) {
  // its own work
  //1. all the auth and authenic check
  // 2. LOG user Object
  if(error) {
  
  } else {
   fun();
  }
  
}

console.log();

*/

//- --------------------------------- CALLBACKS -------------------------------
// Email - thankyou 1
/*
function task1Handler(fun) {
  console.log("operation 1");
  fun(null, "Resule of task 1");
}

// Real Material - 2
function task2handler(resule, fun) {
  console.log("operation 2");
  fun(null, "Resule of task 2");
}

// prepare for another day
function task3handler(resule, fun) {
  console.log("operation 3");
  fun(null, "Resule of task 3");
}

// --------  callbacks  HELL --- -----------

task1Handler((error, result1) => {
  if (error) {
    console.log(error);
  } else {
    task2handler(result1, (error, result2) => {
      if (error) {
        console.log(error);
      } else {
        task3handler(result2, (error, result3) => {
          if (error) {
            console.log(error);
          } else {
            console.log("we have cleared all 3 days");
          }
        });
      }
    });
  }
});

console.log("-------x-x-x-x-x-x-x-x-x-x-x-----------");
*/

//  -------------------- PROMISES --------------------------

// day 1
function task1Handler() {
  const promise = new Promise((res, rej) => {
    console.log("operation 1");
    res("Resule of task 1");
  });

  return promise;
}

// Day 2
function task2Handler() {
  const promise = new Promise((res, rej) => {
    console.log("operation 2");
    res("result of task 2");
  });
  return promise;
}

// Day 3
function task3Handler() {
  const promise = new Promise((res, rej) => {
    console.log("operation 3");
    res("Resule of task 3");
  });
  return promise;
}

//   ---------- PROMISE CONSUMPTION

// l1
task1Handler()
  .then((res1) => {
    return task2Handler(res1);
  })
  .catch(() => {})
  .then((res2) => {
    return task3Handler(res2);
  })
  .then(() => {
    console.log("we have cleared all 3 days");
  })
  .catch((error) => {
    // Error block weill handle error of EVERY LEVEL (L1, l2 l3)
    console.log(error, "error handler ");
  });
