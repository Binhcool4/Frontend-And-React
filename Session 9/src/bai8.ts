function createObject<K extends string, V>(
  keys: readonly K[],
  values: readonly V[]
): Record<K, V> {
  const result = {} as Record<K, V>;
  keys.forEach((key, index) => {
    if (index < values.length) {
      result[key] = values[index] as V;
    }
  });
  return result;
}

const keys = ["id", "name", "email"] as const;
const values = [1, "Alice", "alice@example.com"] as const;

const obj = createObject(keys, values);
console.log(obj);