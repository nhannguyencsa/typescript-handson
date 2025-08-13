//Determine the type
let city = "New York"; //string
let population = 8400000; //number
const age = 32; //32
let oldAge = 79 as const; //79
let newAge = oldAge; //79
let data = new Map(); //Map<any, any>
let score = [90, 86, 100]; //number[]
type Primitive = string | number | boolean; //string | number | boolean
type CustomName =  "John" extends string ? string : "John"; //string
type CustomAge = typeof newAge extends number ? 79 : number; //79
type CheckData = typeof data extends Object ? true : false; //true
type CheckScore = typeof score extends never ? {} : []; //[]

// // Check valid statement
// age = 85; //error
// score.push(10);
// score.push("New Score");
// let customAge: CustomAge = 50;
// let primitive: Primitive = new Date();
// let years: CheckScore = [];
