const STATUS_LOADING = "loading";
const STATUS_STOPPED = "stopped";

enum Direction {
  Up,//0
  Down,//1
  Left,//2
  Right,//3
}
console.log(Direction.Up);

enum Direction2 {
  Up = 1, //1
  Down,//2
  Left,//3
  Right,//4
}
console.log(Direction2.Up);

enum Roles {
  ADMIN = "admin",
  AUTHOR = "author",
  EDITTOR = "edittor"
}
type Person = {
  name: string;
  email: string;
  password: string;
  role: Roles;
}
const person: Person = {
  name: "John",
  email: "jhone@email.com",
  password: "123df",
  role: Roles.ADMIN
}
console.log(person);

