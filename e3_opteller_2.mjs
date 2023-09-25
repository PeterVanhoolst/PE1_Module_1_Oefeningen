import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden

let getal1 = 22;
let getal2 = "33";

console.log(getal1+getal2);
console.log(getal1-getal2);
console.log(getal1*getal2);
console.log(getal1/getal2);
// Voeg hier je eigen code in

process.exit();