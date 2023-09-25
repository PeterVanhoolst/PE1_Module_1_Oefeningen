import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let geboorteJaar = parseFloat(await userInput.question("In welk jaar ben je geboren?"));
let toekomstJaar = parseFloat (await userInput.question ("Geef een jaartal in de toekomst"));


console.log("In "+ toekomstJaar + " zal ik " + (toekomstJaar-geboorteJaar) +" of " + (toekomstJaar-geboorteJaar+1) + " jaar oud zijn.");

process.exit();