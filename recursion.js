const palindrome = (str) => {
  if (str[0] !== str[str.length - 1]) {
    return false;
  } else {
    if (str.length > 1) {
      return palindrome(str.substring(1, str.length - 1));
    } else {
      return true;
    }
  }
};

// console.log(palindrome("tacocat"));

const flatten = (array) => {
  let arrayFlat = array.every((el) => {
    // return typeof el !== "object";
    return !Array.isArray(el);
  });
  if (arrayFlat) {
    return array;
  } else {
    // let newArr = array.flat();
    let newArr = array.reduce((acc, curr) => {
      return acc.concat(curr);
    }, []);
    return flatten(newArr);
  }
};

// console.log(
//   flatten([1, 2, 3, [1, 2, [1], [42, 34], [1, [23, 23, [24, [23, 234]]]], 3]])
// );
// [ 1, 2, 3, 1, 2, 3 ]

const objFlatten = (obj) => {
  let objFlat = Object.values(obj).every((value) => {
    // return typeof value !=='object';
    return !(value instanceof Object);
  });
  if (objFlat) {
    return obj;
  } else {
    for (let key in obj) {
      if (typeof obj[key] === "object") {
        let newObj = { ...obj[key] };
        delete obj[key];
        obj = { ...obj, ...newObj };
      }
    }

    return objFlatten(obj);
  }
};

console.log(
  objFlatten({
    id: 1,
    name: "bob",
    happy: true,
  })
);
// // { id: 1, name: 'bob', happy: true }

console.log(
  objFlatten({
    id: 1,
    name: "bob",
    happy: true,
    friend: {
      id2: 2,
      name2: "alice",
      happy2: true,
    },
  })
);

// // {
// //     id: 1,
// //     name: 'bob',
// //     happy: true,
// //     id2: 2,
// //     name2: 'alice',
// //     happy2: true
// // }

// console.log(
//   objFlatten({
//     id: 1,
//     name: "bob",
//     happy: true,
//     friend: {
//       id2: 2,
//       name2: "alice",
//       happy2: true,
//       friend: {
//         id3: 3,
//         name3: "oof",
//         happy3: true,
//       },
//     },
//   })
// );

// // {
// //     id: 1,
// //     name: 'bob',
// //     happy: true,
// //     id2: 2,
// //     name2: 'alice',
// //     happy2: true,
// //     id3: 3,
// //     name3: 'oof',
// //     happy3: true
// // }

// console.log(
//   objFlatten({
//     id: 1,
//     name: "bob",
//     happy: true,
//     friend: {
//       id2: 2,
//       name2: "alice",
//       happy2: true,
//       friend: {
//         id3: 3,
//         name3: "oof",
//         happy3: true,
//         hi: [1, 2, 3],
//         bye: (str) => console.log(str),
//         oof: null,
//         foof: undefined,
//       },
//     },
//   })
// );

// // {
// //     '0': 1,
// //     '1': 2,
// //     '2': 3,
// //     id: 1,
// //     name: 'bob',
// //     happy: true,
// //     id2: 2,
// //     name2: 'alice',
// //     happy2: true,
// //     id3: 3,
// //     name3: 'oof',
// //     happy3: true,
// //     bye: [Function: bye],
// //     oof: null,
// //     foof: undefined
// // }
//-----------------------------------------------------------------------------
//Write and call recursive method/methods that will mutate and remove all null and undefined values, as well as empty objects from task array. Method should work for any object or array with any number of nested objects or arrays.

//taskDate end result should look like [{b:1},[2,3], {a:4}]

const remove = (items) => {
  if (Array.isArray(items)) {
    for (let i = 0; i < items.length; i++) {
      if (items[i] === null || items[i] === undefined) {
        items.splice(i, 1);
        i--;
      } else if (typeof items[i] === "object") {
        if (Object.keys(items[i]).length === 0) {
          items.splice(i, 1);
          i--;
        } else {
          remove(items[i]);
        }
      }
    }
  } else if (typeof items === "object") {
    for (let i in items) {
      if (items[i] === null || items[i] === undefined) {
        delete items[i];
      } else if (typeof items[i] === "object") {
        if (Object.keys(items[i]).length === 0) {
          delete items[i];
        } else {
          remove(items[i]);
        }
      }
    }
  }
};

const taskData = [
  {
    a: null,
    b: 1,
  },
  null,
  [2, null, 3],
  null,
  { a: 4, b: {} },
];
remove(taskData);

//Find sum of numbers up to num
function sumRange(num) {
  if (num === 0) {
    return num;
  }
  return num + sumRange(num - 1);
}

function sumRange(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}

function power(base, exp) {
  if (exp === 0) return 1;
  return base * power(base, exp - 1);
}

function factorial(num) {
  if (num === 0) return 1;
  return num * factorial(num - 1);
}

function productOfArray(array) {
  if (array.length === 1) return array.shift();
  console.log(array);
  return array.shift() * productOfArray(array);
}

console.log(productOfArray([1, 2, 3, 10, 0.5]));

//Recreate Array.prototype.every method
function all(array, cb) {
  if (array.length === 0) return;
  let a = array.splice(0, 1);
  let b = cb(a);
  if (!b) return false;
  all(array, cb);
  return true;
}
function callback(num) {
  return num < 3;
}
const array = [1, 2, 7, 3];

//Search JS Object with nested objects. Return true of it contains that value.
var nestedObject = {
  data: {
    thing: {
      moreStuff: {
        something: "foo2",
        magicNumber: 44,
      },
    },
  },
  data2: {
    moreStuff2: {
      something2: "lefoo",
      magicNumber2: {
        magicwithin: 24,
      },
    },
  },
  data3: {
    info3: {
      prop: 10,
      moreStuff3: {
        something3: "lmao",
        magicNumber3: 124,
        blah: "bloop",
      },
    },
  },
  hello: 700,
};

const contains = (obj, value) => {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      let done = contains(obj[key], value);
      if (done) return true;
    } else {
      if (obj[key] === value) {
        return true;
      }
    }
  }
  return false;
};

console.log(contains(nestedObject, "lefoo"));
console.log(contains(nestedObject, "lefoo2"));

//Given a multi-dimensional integer array, return the total number of integers stored inside this array
const totalIntegers = (array) => {
  let total = 0;
  if (Number.isInteger(array)) return 1;
  if (Array.isArray(array)) {
    for (let item of array) {
      total += totalIntegers(item);
    }
  } else {
    return 0;
  }
  return total;
};

const array2 = [
  [[5], 3],
  0,
  2,
  ["foo", Infinity],
  [],
  undefined,
  0,
  [NaN, 10],
  [4, [5, 6]],
]; //should return 9 integers
console.log(totalIntegers(array2));
