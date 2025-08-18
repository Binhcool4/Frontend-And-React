function firstMatch<T>(array: T[], predicate: (item: T) => boolean): T | undefined {
  for (const item of array) {
    if (predicate(item)) {
      return item;
    }
  }
  return undefined;
}

const numbers = [1, 3, 5, 8, 10];
const firstEven = firstMatch(numbers, n => n % 2 === 0);
console.log(firstEven); // 8

const words = ["apple", "banana", "cherry"];
const startsWithB = firstMatch(words, w => w.startsWith("b"));
console.log(startsWithB);

const noMatch = firstMatch(words, w => w.startsWith("z"));
console.log(noMatch);