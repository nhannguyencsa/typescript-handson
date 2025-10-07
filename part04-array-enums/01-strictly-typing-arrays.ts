let a: number[] = [1, 2, 3];//number array
let b: Array<string> = ["a", "b", "c"]; //array with generic syntax
let c: (string | number)[] = ["a", 1];//array with union type


//array with object
type Caterer = {
  name: string;
  address: string;
  phone: number;
}

type Seats = {
  [keyof: string]: string;
}

type Airplane = {
  model: string;
  flightNumber: string;
  timeOfDeparture: Date;
  timeOfArrival: Date;
  caterer: Caterer;
  seats: Seats;
}

type Airplanes = Airplane[];

let airplane: Airplanes =[{
  model: "Airbus A380",
  flightNumber: "A2201",
  timeOfDeparture: new Date(),
  timeOfArrival: new Date(),
  caterer: {
    name: "Special Food LLC",
    address: "484, Some Street, Alabama",
    phone: 123456789,
  },
  seats: {
    A1: "John Doe",
    A2: "Mark Doe"
  }
}];

console.log(airplane)
