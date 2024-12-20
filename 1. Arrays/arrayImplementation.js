class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length++] = item;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[--this.length];
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[--this.length];
  }
}

const newArray = new MyArray();
newArray.push("hi");
newArray.push("you");
newArray.push("!");
newArray.push("are");
newArray.delete(0);
newArray.push("nice");
newArray.delete(1);
console.log(newArray);
