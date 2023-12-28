function node(key, value) {
  return {
    key,
    value,
    next: null,
  };
}

function linkedList() {
  let list = null;

  return {
    add: (key, value) => {
      if (!list) {
        list = node(key, value);
        return;
      }

      let currentNode = list;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node(key, value);
      return;
    },
    root: () => {
      return list;
    },
    get: (key) => {
      let currentNode = list;
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
    },
  };
}

module.exports = { linkedList };
