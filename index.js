"use strict";
/*
any
do anything with the value without checking it
It skips type checking, so it’s easy to end up with bugs.
*/
Object.defineProperty(exports, "__esModule", { value: true });
let firstName = "Nhan";
firstName = 123;
firstName = [];
//no error if set noImplicitAny": false in tsconfig.json
function returnParam(param) {
    return param;
}
