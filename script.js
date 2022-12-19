// import fetch from "node-fetch";
// fetch("https://fakestoreapi.com/products")
//   .then((res) => res.json())
//   .then((data) => console.log(data[0].rating.count));

const array = [1, 2];
const array2 = [3, 4, 5];

const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("important data");
    }, 3000);
  });
};

const items = [
  { name: "banana", quantity: 1, price: 1.95 },
  { name: "apple", quantity: 1, price: 1.45 },
  { name: "banana", quantity: 10, price: 0.05 },
  { name: "candy", quantity: 1, price: 3.5 },
];

// const result = [];
// const set = new Set();
// const map = new Map();
// items.forEach((item) => {
//   if (!set.has(item.name)) {
//     set.add(item.name);
//     result.push(item);
//   }
// });

// console.log(result);
