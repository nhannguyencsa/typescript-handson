//child type does extends to parent type
type check = any extends unknown ? true : false;
type check2 = string extends any ? true : false;
type check3 = null extends any ? true : false;
type check4 = undefined extends void ? true : false;
type check5 = [] extends Object ? true : false;
type check6 = Function extends Object ? true : false;

const throwError = (errorMessage: string) => {
  throw new Error(errorMessage);
};

let string: Object = ["a", "b"];
let myFunc: Function = () => 2;
