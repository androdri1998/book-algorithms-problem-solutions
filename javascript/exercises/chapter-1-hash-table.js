const { linkedList } = require("../data-structures/linked-list");

function getLetters() {
  const setLetters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const letters = new Map();

  for (let index = 0; index < setLetters.length; index++) {
    letters.set(setLetters[index], index);
  }

  return {
    getIndex: (letter) => {
      return letters.get(letter);
    },
  };
}

function hash(word) {
  // just a simple hash function to apply in example, not recommended use in production
  const letters = getLetters();

  const firstLetter = word[0].toLowerCase();

  return letters.getIndex(firstLetter);
}

function hashTable() {
  const collection = [];

  return {
    add: (key, value) => {
      const index = hash(key);

      if (!collection[index]) {
        collection[index] = linkedList();
      }

      collection[index].add(key, value);
    },
    get: (key) => {
      const index = hash(key);
      return collection[index].get(key);
    },
  };
}

const table = hashTable();
table.add("book", "some book");
table.add("pen", "some pen");
table.add("ball", "some ball");

console.log(table.get("book"));
// output: some book
console.log(table.get("pen"));
// output: some pen
console.log(table.get("ball"));
// output: some ball
