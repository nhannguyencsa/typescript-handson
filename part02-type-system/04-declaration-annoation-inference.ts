/*
  Declaration: when to declare a type
  annotation; when to assign a type
  inference: try to infer the  type of variable
*/

//  Declaration: when to declare a type
type CustomString = string;
type CustomNumber = number;
type CustomDate = Date;
type CustomSymbol = Symbol;

//annotation; when to assign a type
let firstName: CustomString = "Nhan";
let age: CustomNumber = 99;
let today: CustomDate = new Date();
let unique: CustomSymbol = Symbol();

function addNumbers(a: number, b: number) {
  return a + b;
}

//inference: try to infer the  type of variable
//Once sure the value has that type can you inference
let finalResult = addNumbers(10, 15);





