// const promise = new Promise((resolve, reject) => {
//   console.log("Program pending...");
//   setTimeout(() => {
//     resolve("Program complete");
//   }, 3000);
// });

// promise.then((res) => console.log(res));
//-----------------------------------------------------------------------------

// const p = new Promise((resolve, reject) => {
//   console.log("Program in progress...");
//   setTimeout(() => {
//     resolve("Program complete.");
//   }, 3000);
//   setTimeout(() => {
//     reject("Program failulre!");
//   }, 2000);
// });

// p.then((res) => console.log(res)).catch((e) => console.log(e));
//-----------------------------------------------------------------------------

// const p2 = new Promise((resolve, reject) => {
//   console.log("Program in progress...");
//   setTimeout(() => {
//     resolve("Step 1 complete");
//   }, 3000);
// });

// p2.then((res) => {
//   console.log(res);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Step 2 complete");
//     }, 3000);
//   });
// }).then((res) => console.log(res));

//------------------------------------------------------------------------------

// const newPromise = new Promise((resolve, reject) => {
//   console.log("Program in progress...");
//   setTimeout(() => {
//     resolve({ data: "Hello friend", error: null });
//   }, 5000);
// });

// newPromise
//   .then((res) => {
//     console.log(res);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("First Promise chain complete!");
//       }, 2000);
//     });
//   })
//   .then((res) => {
//     console.log(res);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("Second Promise chain complete");
//       }, 10000);
//     });
//   })
//   .then((res) => console.log(res));

//------------------------------------------------------------------------------

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 3000);
});

const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
  }, 5000);
});

Promise.all([myPromise, myPromise2]).then((array) =>
  console.log(array[0] + array[1])
);
