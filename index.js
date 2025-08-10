"use strict";
/*
  Declaration: when to declare a type
  annotation; when to assign a type
  inference: try to infer the  type of variable
*/
Object.defineProperty(exports, "__esModule", { value: true });
//annotation; when to assign a type
let firstName = "Nhan";
let age = 99;
let today = new Date();
let unique = Symbol();
function addNumbers(a, b) {
    return a + b;
}
//inference: try to infer the  type of variable
//Once sure the value has that type can you inference
let finalResult = addNumbers(10, 15);
