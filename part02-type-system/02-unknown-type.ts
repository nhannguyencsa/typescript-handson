/*
unknown
- It can also hold any value, like any.
- But to use it, you need to check its type first before doing anything with it.
*/

function multiplyByTwo(number: unknown) {
  if(typeof number === "number") {
    return number * 2;
  }
  return "Please provide a valid number";
}

console.log(multiplyByTwo(3));
console.log(multiplyByTwo("abc"));

