class DataStore<T> {
  private data: T[] = [];

  add(item: T): void {
    this.data.push(item);
  }

  getAll(): T[] {
    return [...this.data];
  }
  remove(index: number): void {
    if (index >= 0 && index < this.data.length) {
      this.data.splice(index, 1);
    } else {
      console.error("Index không hợp lệ");
    }
  }
}

const numberStore = new DataStore<number>();
numberStore.add(10);
numberStore.add(20);
console.log(numberStore.getAll());
numberStore.remove(0);
console.log(numberStore.getAll());

const stringStore = new DataStore<string>();
stringStore.add("hello");
stringStore.add("world");
console.log(stringStore.getAll());