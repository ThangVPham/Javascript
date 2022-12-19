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
