let id: symbol  = Symbol(1234);
let alphabeticId: symbol = Symbol("id");

let user = {
  [id]: "12345",
  name: "Mark",
  getId() {
    return this[id];
  }
}

console.log(user.name);
console.log(id);
console.log(user.getId())

