if(false) {


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

{
console.log("\nÖVNING 3 Jämförelseoperatorer");
const inmatning = prompt("Ange två tal").split(" ");
const a = parseFloat(inmatning[0]);
const b = parseFloat(inmatning[1]);

if (a < b) {
    console.log(`Tal A är mindre än tal B. ${a} < ${b}`);
} else if (a > b) {
    console.log(`Tal A är större än tal B. ${a} > ${b}`);
} else if (a === b) {
    console.log(`Tal A är lika med tal B. ${a} = ${b}`);
} else {
    console.log("Minst ett av talen är inte ett nummer.")
}

}


console.log("\nÖVNING 4 Jämn eller udda")
{
    const tal = Number(prompt("Jämn eller udda?\nAnge ett tal:"));
    const svar = (tal % 2 === 0) ? "jämnt" : "udda";
    console.log(`Talet ${tal} är ${svar}.`);
}


console.log("\nÖVNING 5 Logiska operatorer")
{
const alder = Number(prompt("Ålder"));
let harLegitimation = prompt("Legitimation? (true/false)");

if (harLegitimation === "true") {
    harLegitimation = true;
} else if (harLegitimation === "false") {
    harLegitimation = false;
} else {
    console.log(`Fel svar på legitimationsfrågan: ${harLegitimation}`);
    harLegitimation = false;
}


if ((alder >= 18) && harLegitimation) {
    console.log("Du får komma in.");
} else {
    console.log("Du får inte komma in.");
}
}


console.log("\nÖVNING 6 Enkel kalkylator")
{
const inmatning = prompt(`Ange två tal och en operation. (+-*/%)`, "2 + 2").split(" ");
const a = Number(inmatning[0]);
const op = inmatning[1];
const b = Number(inmatning[2]);

let svar;
switch (op) {
    case '+':
        svar = a + b;
        break;
    case '-':
        svar = a - b;
        break;
    case '*':
        svar = a * b;
        break;
    case '/':
        svar = a / b;
        break;
    case '%':
        svar = a % b;
        break;
    default:
        svar = NaN;
        break;
}
if (!isNaN(svar)) {
    console.log(`${a} ${op} ${b} = ${svar}`);
} else {
    console.log("Fel i kalkylatorn 🤦‍♀️");
}
}


console.log("\nÖVNING 7 Strikt och lös jämförelse");
{
    let x = '10', y = 10;
    console.log("x =", x, ", y =", y);
    console.log("x == y", x == y);
    console.log("x === y", x === y);

    // == jämför värdena
    // === jämför både värde och typ
}

console.log("\nÖVNING 8 Ålderskontroll")
{
    const alder = Number(prompt("Ålderskontroll\nAnge din ålder:"));
    if (13 <= alder && alder <= 17) {
        console.log("Du är tonåring.");
    }
    else {
        console.log("Du är inte tonåring.");
    }
}

console.log("\nÖVNING 9 Max av tre tal");
{
    let tal1 = Number(prompt("ange tre tal"));
    let tal2 = Number(prompt("ange tre tal"));
    let tal3 = Number(prompt("ange tre tal"));

    if (tal1 > tal2 && tal1 > tal3) {
        console.log("Tal 1 är störst");
    }
    else if (tal2 > tal1 && tal2 > tal3) {
        console.log("Tal 2 är störst");
    }
    else if (tal3 > tal1 && tal3 > tal2) {
        console.log("Tal 3 är störst");
    }
    else {
        console.log("Inget av talen är störst.");
    }
}

console.log("\nÖVNING 10 Lösenordsvalidering")
{
    let losenord = prompt("Ange ett lösenord.");
    if (losenord.length >= 8 && losenord.match(/\d/)) {
        console.log("Giltigt lösenord.");
    }
    else {
        console.log("Ogiltigt lösenord.");
    }
}
console.log("\nÖVNING 11 Skottårskoll")

let artal = Number(prompt("Ange ett årtal"));
let skottar = false;
if (artal % 4 === 0) {
    skottar = true;
    if (artal % 100 === 0) {
        skottar = false;
        if (artal % 400 === 0) {
            skottar = true;
        }
    }
}
if (skottar) {
    console.log("Skottår.");
} else {
    console.log("Inte skottår.");
}

console.log("\nÖVNING 12 BMI-Kalkylator");

let vikt = Number(prompt("Ange din vikt i kilogram"));
let langd = Number(prompt("Ange din längd i meter."));
let bmi = vikt / (langd * langd);
let kategori;
if (bmi < 18.5) {kategori = "undervikt"}
else if (18.5 <= bmi && bmi < 25) {kategori = "normalvikt"}
else if (25 <= bmi && bmi < 30) {kategori = "övervikt"}
else if (30 <= bmi) {kategori = "fetma"}
console.log(`Din BMI är ${bmi.toFixed(1)} (${kategori})`);

}//if false
console.log("\nÖVNING 13 Logisk sanningtabell")
let a,b;
let tabell ="A\t\tB\t\tA&&B\tA||B\t!A\n";
a = true; b = true;
tabell += `${a}\t${b}\t${a&&b}\t${a||b}\t${!a}\n`;
a = true; b = false;
tabell += `${a}\t${b}\t${a&&b}\t${a||b}\t${!a}\n`;
a = false; b = true;
tabell += `${a}\t${b}\t${a&&b}\t${a||b}\t${!a}\n`;
a = false; b = false;
tabell += `${a}\t${b}\t${a&&b}\t${a||b}\t${!a}`;

console.log(tabell);


console.log("\nÖVNING 14 FizzBuzz");
for (let i = 1; i <= 30; i++) {
    if (i % 5 === 0 && i% 3 === 0) {
        console.log("FizzBuzz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else {
        console.log(i);
    }
}


console.log("\nÖVNING 15 Nummergissningsspel");
let nummer, gissning, antalGissningar;

nummer = Math.floor(Math.random() * 100) + 1;

gissning = parseInt(prompt("Gissa ett tal mellan 1 och 100."));
console.log(nummer, gissning);  
antalGissningar = 1;
while (gissning !== nummer) {
    if (gissning > nummer) {
        gissning = parseInt(prompt("För högt, gissa lägre."));
    } else if (gissning < nummer) {
        gissning = parseInt(prompt("För lågt, gissa högre."));
    }   
    antalGissningar++;
}
alert(`Du vann. Du har gissat rätt. Talet var ${nummer}. Du gissade ${antalGissningar} gånger.`);