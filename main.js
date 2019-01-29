"use strict";
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
var myName = "Mike";
//myName = 23;
//number
var myAge = 27;
// myAge  = 'Mike'; error number is strict typed
// boolean
var hasHobbies = false;
// hasHobbies = 1; error either true/ false with boolean
// assigns types
var myRealAge;
myRealAge = 27;
// myRealAge = '27'; error
//array
var hobbies = ["cooking", "Sports"];
hobbies = [100];
//hobbies = 100;
//tuples
var address = ["Knocksville", 99];
// enum
var Color;
(function (Color) {
    Color[Color["Blue"] = 0] = "Blue";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Yellow"] = 2] = "Yellow";
})(Color || (Color = {}));
var myColor = Color.Blue;
// console.log(myColor);
//any
var car = "BWM";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
// functions
function returnMyName() {
    return myName;
}
console.log(returnMyName);
//void no return
function sayHello() {
    console.log("Hello!");
}
// arg types
function multiplyNums(value1, value2) {
    return value1 * value2;
}
console.log(multiplyNums(1, 2));
// function types
var myMultiply;
myMultiply = sayHello;
myMultiply();
myMultiply = multiplyNums;
console.log(myMultiply(5, 2));
