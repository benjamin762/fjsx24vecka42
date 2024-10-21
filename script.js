console.log("-- String --");

// console.log("\nÖVNING 1 toUpperCase toLowerCase");
// let mening = prompt("Ange en mening.")
// console.log(`Versaler: ${mening.toUpperCase()}
// Gemener: ${mening.toLowerCase()}`); 


// console.log("\nÖVNING 2 charAt slice");
// let s = "JavaScript";
// console.log(`Första tecknet: ${s.charAt(0)}`)
// let ny = s.slice(0, 4);
// console.log(ny);


// console.log("\nÖVNING 3 split join");
// let listaMedOrd = prompt('Ange en lista med ord separerade med kommatecken, t.ex. "äpple,banan,apelsin".')
// let array = listaMedOrd.split(',');
// console.log("Array:", array);
// let nyStrang = array.join(' ');
// console.log(nyStrang);

// console.log("\nÖVNING 4 replace includes");
// let alskar = "Jag älskar Programmering";
// console.log("Innehåller \"Programmering\"", alskar.includes("Programmering"));
// alskar.replace("Programmering", "JavaScript");
// console.log(alskar);


console.log("\nÖVNING 5 trim substring");
let otrimmat = prompt("Ange en sträng med extra mellanslag i början och slutet.");
let trimmat = otrimmat.trim();
let femForsta = trimmat.substring(0, 6);    
console.log(femForsta);
// Skillnad slice och substring? Ganska lika, olika vid negativa tal.





// console.log("-- Number --");
// console.log("\nÖVNING 6 toFixed");
// console.log("\nÖVNING 7 parseInt parseFloat");
// console.log("\nÖVNING 8 isNaN isFinite");
// console.log("\nÖVNING 9 toPrecision toExponential");

// console.log("-- BigInt --");
// console.log("\nÖVNING 10 BigInt");
// console.log("\nÖVNING 11 BigInt operatorer");

// console.log("-- Boolean --");
// console.log("\nÖVNING 12 Omvandla till boolean");
// console.log("\nÖVNING 13 Logiska operatorer");

// console.log("-- Undefined och null --");
// console.log("\nÖVNING 14 Skillnaden mellan undefined och null");

// console.log("-- Object --");
// console.log("\nÖVNING 15 Använda Object.keys(), Object.values(), Object.entries()");
// console.log("\nÖVNING 16 Object.assign()");
// console.log("\nÖVNING 17 Object.freeze Object.seal()");
// console.log("\nÖVNING 18 Object.create()");