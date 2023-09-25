import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let aantalDagen = parseFloat(await userInput.question("Geef een aantal dagen in."));
let aantalUren = parseFloat(await userInput.question("Geef een aantal uren in."));
let aantalMinuten = parseFloat(await userInput.question("Geef een aantal minuten in."));
let aantalSeconden = parseFloat(await userInput.question("Geef een aantal seconden in."));

aantalDagen = (aantalDagen*86400);
aantalUren = (aantalUren*3600);
aantalMinuten = (aantalMinuten*60);


console.log("Totaal aantal seconden bedraagt: " + (aantalDagen+aantalUren+aantalMinuten+aantalSeconden));

process.exit()