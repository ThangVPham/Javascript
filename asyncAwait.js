//async functions will always return a Promise

const fetchPokemon = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   resolve({ data: { name: "Pikachu", power: 20 } });
      reject(new Error("Danger, danger!"));
    }, 2000);
  });
};

// console.log("Program starting...");

const getPokemon = async () => {
  try {
    const pokemon = await fetchPokemon();
    console.log(pokemon);
  } catch (e) {
    console.log(e.message);
  }
};

// getPokemon();
// console.log("Program complete.");

//------------------------------------------------------------
function fetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: { user: "Monkey", admin: true } });
      //   reject(new Error("Danger, danger!"));
    }, 3000);
  });
}

function login(obj) {
  if (obj.admin) {
    console.log("Successfully logged in.");
  } else {
    console.log("Failed to log in, please try again");
  }
}

// console.log("Program starting...");
async function getData() {
  try {
    const user = await fetchUser();
    login(user.data);
  } catch (e) {
    console.log(e.message);
  }
}
// getData();
// console.log("Program complete");

//------------------------------------------------------------
function fetchFast() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Fast done!");
    }, 2000);
  });
}

function fetchSlow() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Slow done!");
    }, 6000);
  });
}

// console.log("Program starting...");
let time = Date.now();

async function fetchData() {
  try {
    const fast = await fetchFast();
    console.log(fast);
    const slow = await fetchSlow();
    time = Date.now() - time;

    console.log(slow, time + "ms");

    // const fast = fetchFast();
    // const slow = fetchSlow();
    // Promise.all([fast, slow]).then((data) => {
    //   time = Date.now() - time;
    //   console.log([data[0], data[1]], time + "ms");
    // });
  } catch (e) {
    console.log(e.message);
  }
}

// fetchData();
// console.log("Program complete!");

//-------------------------------------------------------------
function goGetCandies() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ candy: "sour candy", quantity: 10 });
    }, 2000);
  });
}

function sellCandies(candy) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let cents = candy.quantity * 25;
      resolve(cents);
    }, 3000);
  });
}

async function getMoney() {
  try {
    const candy = await goGetCandies();
    const money = await sellCandies(candy);
    console.log(money);
  } catch (e) {
    console.log(e.message);
  }
}
// getMoney();
// goGetCandies()
//   .then((candy) => sellCandies(candy))
//   .then((cent) => console.log(cent));

function getGameID(name) {
  return fetch("https://api.igdb.com/v4/games", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Client-ID": "8ncvqdb0raz50ds0qogw6r6tqkqq8j",
      Authorization: "Bearer s8h74k1nxspj6vmnh1nwyuz2yozlbe",
    },
    body: `fields name; search "${name}"; limit 13;`,
  })
    .then((res) => res.json())
    .then((data) => {
      return data.sort((a, b) => a.id - b.id);
    });
  // .then((data) => {
  //   if (data.length) {
  //     return data;
  //   } else {
  //     return (data = { id: "Not Found", name: "Not Found" });
  //   }
  // })
  // .catch((e) => console.log(e.message));
}
