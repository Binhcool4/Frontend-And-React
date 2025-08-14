function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}
const person = { name: "Binh", age: 22 };
const job = { title: "Developer", salary: 1000 };

const merged = mergeObjects(person, job);
console.log(merged);