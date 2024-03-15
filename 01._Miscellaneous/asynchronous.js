// Asynchronous code:
// Browser event handlers, network calls, buffers / streams,
// working with files / directories, setTimeout / setInterval,
// databases

// Javascript is one threaded - the main thread

// Solution 1: Callbacks
// Problem: Callback hell, Pyramid of Doom

// Solution 2: Promises
// States:
// 1. Pending
// 2. Fulfilled
//  - resolved
//  - rejected

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     try {
//       throw new Error("some error");
//       resolve("Everything OK");
//     } catch (error) {
//       reject(error);
//     }
//   }, 2000);
// })
//   .then((successMessage) => console.log(successMessage))
//   .catch((failMessage) => console.log(failMessage));

//console.log("I'm walking here");

// Create a promisified function
// that is, a function that returns a new promise
// it should be called myPromise
// and it should either resolve as "Something Good" or reject as "Something Bad"
// create a 3 second timeout to simulate asynchronous behavior

const value = true;

function myPromise(value) {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
    
      // use try catch instead
      if (value) {
        resolve("Value is true");
      } else {
        reject("Value is false");
      }
    
    }, 2000);
  });
}

myPromise(value)
  .then((successMessage) => console.log(successMessage))
  .catch((failMessage) => console.log(failMessage));
