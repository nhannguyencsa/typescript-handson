"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const safeInt = Number.MAX_SAFE_INTEGER;
console.log(safeInt);
const safeIntPLusOne = safeInt + 1;
console.log(safeIntPLusOne);
const safeIntPlusTwo = safeInt + 2;
console.log(safeIntPlusTwo);
let bigInt1 = BigInt(1234);
let bigInt2 = 1234n;
console.log(bigInt1);
console.log(bigInt2);
let c = bigInt1 - bigInt2;
console.log(c);
// let e:bigint = 123456.7n; //error
// let f = Math.log(bigInt1)//error
