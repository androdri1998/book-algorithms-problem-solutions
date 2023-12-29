class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.collection = null;
  }

  getCollection() {
    return this.collection;
  }

  setCollection(value) {
    this.collection = value;
  }

  add(key, value) {
    if (!this.getCollection()) {
      const node = new Node(key, value);
      this.setCollection(node);
      return;
    }

    let currentNode = this.getCollection();
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = new Node(key, value);
    return;
  }

  get(key) {
    let currentNode = this.getCollection();
    if (!currentNode) {
      return;
    }

    while (currentNode) {
      if (currentNode.key === key) {
        break;
      }
      currentNode = currentNode.next;
    }

    return currentNode.value;
  }
}

module.exports = LinkedList;
