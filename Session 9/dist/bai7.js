"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function updateUser(user, updates) {
    return { ...user, ...updates };
}
const user1 = { id: 1, name: "Alice", email: "alice@example.com" };
const updated1 = updateUser(user1, { name: "Alice Nguyen" });
console.log(updated1);
const updated2 = updateUser(user1, { email: "alice123@gmail.com", age: 30 });
console.log(updated2);
