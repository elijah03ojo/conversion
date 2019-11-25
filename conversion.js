const readlineSync = require("readline-sync");

const F = 63360;
const C = 5280;
const K = 1760;
const Celsius = "kilometers";
const miles;
let origin = readlineSync.question("Enter a Temperature: ");

console.log();

while (origin = "Celsius" || origin = "Fareinheit") {
   origin = readlineSync.question("Enter an origin unit: ");
}
