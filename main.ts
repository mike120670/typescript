// class Greeter {
//     greeting: string;
//     constructor(message: string) {
//         this.greeting = message;
//     }
//     greet() {
//         return "Hello, " + this.greeting;
//     }
// }

// let greeter = new Greeter("world");

// let button = document.createElement('button');
// button.textContent = "Say Hello";
// button.onclick = function() {
//     alert(greeter.greet());
// }

// document.body.appendChild(button);
console.log("It works!!!");

// string
let myName = "Mike";
//myName = 23;
//number
let myAge: number = 27;
// myAge  = 'Mike'; error number is strict typed

// boolean
let hasHobbies: boolean = false;
// hasHobbies = 1; error either true/ false with boolean

// assigns types
let myRealAge: number;
myRealAge = 27;
// myRealAge = '27'; error

//array
let hobbies: any[] = ["cooking", "Sports"];
hobbies = [100];
//hobbies = 100;

//tuples
let address: [string, number] = ["Knocksville", 99];

// enum
enum Color {
  Blue,
  Green,
  Yellow,
}
let myColor: Color = Color.Blue;
// console.log(myColor);

//any
let car: any = "BWM";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);

// functions
function returnMyName(): string {
  return myName;
}
console.log(returnMyName);

//void no return
function sayHello(): void {
  console.log("Hello!");
}

// arg types
function multiplyNums(value1: number, value2: number) {
  return value1 * value2;
}
console.log(multiplyNums(1, 2));

// function types
let myMultiply: (a: number, b: number) => number;
//myMultiply = sayHello;
//myMultiply();
myMultiply = multiplyNums;
console.log(myMultiply(5, 2));

// objetcs
let userData: { name: string; age: number } = {
  name: "Mike",
  age: 45,
};

//complex object
let complex: { data: number[]; output: (all: boolean) => number[] } = {
  data: [100, 3.99, 10],
  output: function(all: boolean): number[] {
    return this.data;
  },
};

// type alias only create once change once
type Complex = { data: number[]; output: (all: boolean) => number[] };

let complex2: Complex = {
  data: [100, 3.99, 10],
  output: function(all: boolean): number[] {
    return this.data;
  },
};

// union types
let usersAge: number | string = 27;
usersAge = "27";
// usersAge = true; error ...could use 'any' and number,string, boolean are available

//checking types
let userValue = 30;
if (typeof userValue == "number") {
  console.log("user value is a string");
}
// if the value was a string no console output

//never
function neverMethod(): never {
  throw new Error("An error");
}
