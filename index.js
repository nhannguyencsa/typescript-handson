"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let id = Symbol(1234);
let alphabeticId = Symbol("id");
let user = {
    [id]: "12345",
    name: "Mark",
    getId() {
        return this[id];
    }
};
console.log(user.name);
console.log(id);
console.log(user.getId());
