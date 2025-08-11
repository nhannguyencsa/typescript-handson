"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let firstName = "Nhan";
let age = 99;
//User from API
let user = {
    name: "Nhan",
    age: 99
};
function fetchUser() {
    return user;
}
const fetchedUser = fetchUser();
