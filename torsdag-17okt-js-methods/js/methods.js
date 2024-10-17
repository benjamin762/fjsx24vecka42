// <-----------Code Along: Inbyggda Funktioner och Metoder i JavaScript------------>
console.log("Hej Studenter!");
// Översikt
// Syfte: Att ge en praktisk introduktion till vanliga inbyggda funktioner och metoder för olika datatyper i JavaScript.

// Datatyper att täcka:
// String
// Number
// BigInt
// Boolean
// Undefined och Null
// Object

// ------------------------------------------------------
// let text = "hej";
// console.log(text);
// 1.2 Vanliga String-metoder------------------------->

// 1.2.1 toUpperCase() och toLowerCase()
// Funktion: Konverterar alla tecken i en sträng till versaler eller gemener.

// let firstText = "Mandus är bäst";
// let toUpperCaseText = firstText.toUpperCase();
// let toLowerCaseText = firstText.toLowerCase();

// console.log(firstText);
// console.log(toUpperCaseText);
// console.log(toLowerCaseText);

// 1.2.2 charAt(index)
// Funktion: Returnerar tecknet på den angivna positionen i strängen.

// let firstText = "Mandus är bäst";
// // let firstChar = firstText.charAt(0).toLowerCase();
// // let fifthIndexChar = firstText.charAt(5);
// let fifthChar = firstText.charAt(6);

// // console.log(fifthIndexChar);
// console.log(fifthChar);
// console.log(typeof fifthChar);

// 1.2.3 slice(start, end)
// Funktion: Extraherar en del av en sträng och returnerar den som en ny sträng.

// let firstText = "Mandus är bäst";
// let slicedText = firstText.slice(8);

// console.log(slicedText);

// 1.2.4 split(separator) (Array)
// Funktion: Delar en sträng i en array baserat på en separator

// 1.2.5 replace(searchValue, newValue)
// Funktion: Ersätter en del av strängen med en annan sträng.
// let firstText = "Mandus är bäst";
// let newSentence = firstText.replace("M", "Du heter F");

// console.log(newSentence);

// 1.2.6 includes(searchString)
// Funktion: Kontrollerar om en sträng innehåller en annan sträng. Returnerar true eller false.

// let firstText = "Mandus är bäst";
// let includeText = firstText.includes("bäst", 8);

// console.log(includeText);

// Del 2: Number-metoder------------------------->

// 2.1 Introduktion till Number-datatypen
// Beskrivning:
// Representerar numeriska värden, både heltal och flyttal.
// JavaScript använder IEEE 754 standarden för flyttal.

// 2.2 Vanliga Number-metoder
// 2.2.1 toFixed(digits)
// Funktion: Returnerar en sträng som representerar talet med ett specificerat antal decimaler.

// let aNumber = 3.1543254653;
// let fiveDecimals = aNumber.toFixed(5);
// console.log(fiveDecimals);

// 2.2.2 parseInt() och parseFloat()
// Funktion: Konverterar en sträng till ett heltal eller flyttal.

// let intString = "123";
// let floatString = "3.123";
// let invalidString = "123asv322";

// let intValue = parseInt(intString);
// let floatValue = parseFloat(floatString);
// let invalidValue = parseInt(invalidString);

// console.log("heltal: ", typeof intValue);
// console.log("Flyttal: ", typeof floatValue);
// console.log("ogiltigt koventering: ", typeof invalidValue);

// 2.2.3 isNaN()
// Funktion: Kontrollerar om ett värde är NaN (Not-a-Number).

// Del 3: BigInt------------------------->

// 3.1 Introduktion till BigInt-datatypen
// Beskrivning:
// BigInt används för att representera heltal med godtycklig storlek.
// Skapas genom att lägga till n i slutet av talet eller genom BigInt().

// 3.2 Aritmetiska operationer med BigInt
// Observera:
// Du kan inte blanda BigInt och Number i operationer.
// Båda operandena måste vara av typen BigInt.

// Del 4: Boolean------------------------->

// 4.1 Introduktion till Boolean-datatypen
// Beskrivning:
// Representerar två värden: true eller false.
// Används i logiska uttryck och kontrollflöden.

// 4.2 Omvandla värden till Boolean
// Regler:
// Falsy värden: 0, "" (tom sträng), null, undefined, NaN, false.
// Alla andra värden är truthy.

// Del 5: Undefined och Null------------------------->

// 5.1 Undefined
// Beskrivning:
// En variabel som har deklarerats men inte tilldelats något värde har värdet undefined.

// Del 6: Object------------------------->

let person = {
  name: "Lisa",
  age: 24,
  city: "London",
};

console.log(person);
console.log(typeof person);
// 6.1 Introduktion till Object-datatypen
// Beskrivning:
// Objekt är samlingar av nyckel-värde-par.
// Används för att lagra strukturerad data.

// 6.2 Vanliga Object-metoder
// 6.2.1 Object.keys(obj)
// Funktion: Returnerar en array med alla nycklar/keys i objektet.

let keysVariable = Object.keys(person);
console.log(keysVariable);

// 6.2.2 Object.values(obj)
// Funktion: Returnerar en array med alla värden i objektet.
let valueVariable = Object.values(person);
console.log(valueVariable);
// 6.2.3 Object.entries(obj)
// Funktion: Returnerar en array av nyckel-värde-par.

// 6.2.4 Object.assign(target, source)
// Funktion: Kopierar egenskaper från ett eller flera källobjekt till ett målobjekt.

// 6.2.5 Object.freeze(obj)
// Funktion: Gör ett objekt oföränderligt; inga ändringar kan göras.
