console.log("\nÖVNING 1 Grundläggande aritmetiska operationer");
let a = 12, b = 5;
console.log(`
a = ${a}, b = ${b}
Summa: ${a + b}
Diffrens: ${a - b}
Produkt: ${a * b}
Kvot: ${a / b}
Rest: ${a % b}`);


console.log("\n ÖVNING 2 Temperaturkonvertering");
const celsius = Number(prompt("Ange en temperatur i celsius"));
const farenheit = celsius * 9 / 5 + 32;
console.log(celsius + "℃ är " + farenheit + "℉");
