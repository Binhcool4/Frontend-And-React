"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DataStore {
    data = [];
    add(item) {
        this.data.push(item);
    }
    getAll() {
        return [...this.data];
    }
    remove(index) {
        if (index >= 0 && index < this.data.length) {
            this.data.splice(index, 1);
        }
        else {
            console.error("Index không hợp lệ");
        }
    }
}
const numberStore = new DataStore();
numberStore.add(10);
numberStore.add(20);
console.log(numberStore.getAll());
numberStore.remove(0);
console.log(numberStore.getAll());
const stringStore = new DataStore();
stringStore.add("hello");
stringStore.add("world");
console.log(stringStore.getAll());
