var a = [1, 2, 3]; //number array
var b = ["a", "b", "c"]; //array with generic syntax
var c = ["a", 1]; //array with union type
var airplane = [{
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
console.log(airplane);
