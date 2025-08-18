type User = {
  id: number;
  name: string;
  email: string;
  age?: number;
};

type UserUpdates = Partial<Pick<User, "name" | "email" | "age">>;

function updateUser(user: User, updates: UserUpdates): User {
  return { ...user, ...updates };
}

const user1: User = { id: 1, name: "Alice", email: "alice@example.com" };

const updated1 = updateUser(user1, { name: "Alice Nguyen" });
console.log(updated1);

const updated2 = updateUser(user1, { email: "alice123@gmail.com", age: 30 });
console.log(updated2);
