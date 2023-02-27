const createVendingMachine = () => {
  const stock = ["Cola", "Chips", "Chocolate", "Juice", "Nuts"];
  let coins = 0;
  const add25 = () => {
    coins += 25;
    if (coins === 100) {
      let random = Math.floor(Math.random() * stock.length);
      console.log(`You got some ${stock[random]}`);
      coins = 0;
    } else {
      console.log(`You need ${100 - coins} more coins`);
    }
  };
  return add25;
};

const vendingMachine = createVendingMachine();

const createDatabase = () => {
  const storage = ["Apple", "Banana", "Carrot"];
  const addToDB = (item) => {
    storage.push(item);
    console.log(storage);
  };

  const clearDB = () => {
    storage.splice(0, storage.length);
    console.log(storage);
  };

  return [addToDB, clearDB];
};

const [add, clear] = createDatabase();

const baseURL = "https://pokeapi.co/api/v2/pokemon/";

const pokemonDownloader = () => {
  let pokemonCache = {};
  const download = async (string) => {
    if (pokemonCache[string]) {
      console.log(`${string} was found.`);
      return pokemonCache[string].name;
    }
    console.log(`Fetching data for ${string}`);
    const response = await fetch(`${baseURL}${string}`);
    const data = await response.json();
    pokemonCache[string] = data;
    return pokemonCache;
  };

  return download;
};

const getInfo = async (name) => {
  const pokemon = await getPokemonInfo(name);
  console.log(pokemon);
};

const getPokemonInfo = pokemonDownloader();
