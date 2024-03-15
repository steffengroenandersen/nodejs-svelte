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

// Solutoin 3: Async/Await
// Syntatic sugar

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

function myPromise() {
  const value = true;

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

// myPromise(value)
//   .then((successMessage) => console.log(successMessage))
//   .catch((failMessage) => console.log(failMessage));

// Assignment: Try to simulate the fetch function. Call it myFetch.
// It should return the promise json() so that you can call response.json() on it
// As much as possible try to imagine how fetch works and simulate the underlying code

// function myFetch() {
//   return new Promise((resolve, reject) => {
//     try {
//       resolve(
//         (response = {
//           json: () => {
//             return new Promise((resolve, reject) => {
//               try {
//                 resolve({ data: "hello" });
//               } catch (error) {
//                 reject(error);
//               }
//             });
//           },
//         })
//       );
//     } catch (error) {
//       reject(error);
//     }
//   });
// }

// myFetch()
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// function myFetchAnders(URL, options = {}) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       try {
//         resolve({
//           json: () => new Promise((resolve, reject) => resolve("Response from server")
//         )});
//       } catch {
//         reject();
//       }
//     }, 2500);
//   });
// }

// myFetchAnders()
// .then((response) => response.json())
// .then((data) => console.log(data))
// .catch((data) => console.log(data));

async function main() {
  try {
    const myPromiseResult = await myPromise();
    console.log("In main:" + myPromiseResult);
    return myPromiseResult;
  } catch (error) {
    console.log(error);
  }
  
}

async function wrapperMain(){
  const data = await main();
  console.log(data);

  return data;
}

const data = await wrapperMain();

console.log(data);

