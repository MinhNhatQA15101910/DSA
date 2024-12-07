class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const index = this._hash(key);

    if (!this.data[index]) {
      this.data[index] = [];
    }

    this.data[index].push([key, value]);
  }

  get(key) {
    const index = this._hash(key);

    console.log(this.data[index]);

    if (this.data[index]) {
      for (let i = 0; i < this.data[index].length; i++) {
        if (this.data[index][i][0] === key) {
          return this.data[index][i][1];
        }
      }
    }

    return undefined;
  }

  keys() {
    const keysArray = [];

    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        let len = this.data[i].length;
        for (let j = 0; j < len; j++) {
          keysArray.push(this.data[i][j][0]);
        }
      }
    }

    return keysArray;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.set("apples", 9);
myHashTable.set("oranges", 2);
console.log(myHashTable.keys());
