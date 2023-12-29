const LinkedList = require("../data-structures/linked-list");

class LettersProvider {
  constructor() {
    this.allLetters = [];
    this.lettersIndex = new Map();

    this.loadLetters();
    this.createLettersIndex();
  }

  loadLetters() {
    this.allLetters = [
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
  }

  setLetterIndex(letter, value) {
    this.lettersIndex.set(letter, value);
  }

  allLettersSize() {
    return this.allLetters.length;
  }

  getLetterByIndex(index) {
    return this.allLetters[index];
  }

  getIndexByLetter(letter) {
    return this.lettersIndex.get(letter);
  }

  createLettersIndex() {
    for (let index = 0; index < this.allLettersSize(); index++) {
      this.setLetterIndex(this.getLetterByIndex(index), index);
    }
  }

  getIndex(letter) {
    const index = this.getIndexByLetter(letter);
    return index;
  }
}

class HashProvide {
  constructor(lettersProvider) {
    this.lettersProvider = lettersProvider;
  }

  firstLetterWord(word) {
    return word[0].toLowerCase();
  }

  getLetterIndex(letter) {
    return this.lettersProvider.getIndex(letter);
  }

  // just a simple hash function to apply in example, not recommended use in production
  hash(word) {
    const firstLetter = this.firstLetterWord(word);
    return this.getLetterIndex(firstLetter);
  }
}

class HashTable {
  constructor(hashProvider) {
    this.collection = [];
    this.hashProvider = hashProvider;
  }

  getCollection() {
    return this.collection;
  }

  getIndex(index) {
    return this.collection[index];
  }

  setIndex(index, value) {
    this.collection[index] = value;
  }

  get(key) {
    const index = this.hash(key);
    const linkedList = this.getIndex(index);
    return linkedList.get(key);
  }

  hash(key) {
    return this.hashProvider.hash(key);
  }

  add(key, value) {
    const index = this.hash(key);

    if (!this.getIndex(index)) {
      const linkedList = new LinkedList();
      this.setIndex(index, linkedList);
    }

    const linkedList = this.getIndex(index);
    linkedList.add(key, value);
  }
}

const lettersProvider = new LettersProvider();
const hashProvider = new HashProvide(lettersProvider);
const hashTable = new HashTable(hashProvider);
hashTable.add("book", "some book");
hashTable.add("pen", "some pen");
hashTable.add("ball", "some ball");

console.log(hashTable.get("book"));
// output: some book
console.log(hashTable.get("pen"));
// output: some pen
console.log(hashTable.get("ball"));
// output: some ball
