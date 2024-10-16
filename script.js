console.log("ÖVNING 1");
let firstName, lastName, age;
firstName = "Benjamin";
lastName = "Stenlund";
age = 28;
console.log(`Hej, jag heter ${firstName} ${lastName} och jag är ${age} år gammal.`);

console.log("\nÖVNING 2");
let a = 5, b = 10;
let temp;
console.log("före",a,b);
temp = a; a = b; b = temp;
console.log("efter",a,b);

{console.log("\nÖVNING 3");
let firstName = "Benjamin", middleName = "Frank", lastName = "Stenlund";
let fullName = middleName + " " + firstName + " " + lastName;
console.log(fullName);
}


console.log("\nÖVNING 4");
const radius = 80;
const omkrets = 2 * Math.PI * radius;
console.log("Cirkelns omkrets är:", omkrets);
const area = Math.PI * radius**2;
// Math.pow(radius, 2)
console.log("Cirkelns area är:", area);


console.log("\nÖVNING 5 typeof");
const nr = 14, str = "Text", bool = true;
let ud;
const n = null, o = {};
console.log (`
    nr  ${typeof nr}
    str ${typeof str}
    bool    ${typeof bool}
    ud  ${typeof ud}
    n   ${typeof n}
    o   ${typeof o}`);



console.log("\nÖVNING 6 Implicit och explicit typkonvertering");
{
    const x = "5", y = 3;
    console.log(`x = ${x}, y = ${y}
x + y = ${x + y}
Number(x) + y = ${Number(x) + y}
x * y = ${x * y}
x / y = ${x / y}
x - y = ${x - y}
x + y + y = ${x + y + y}
x + (y + y) = ${x + (y + y)}
`);
}



console.log("ÖVNING 7");
const inmatning = prompt("Övning 7\nMata in ett värde");
console.log(inmatning);
console.log(typeof inmatning);
console.log("Är värdet ett nummer:", !isNaN(inmatning))
const somNr = Number(inmatning);
// isNaN(inmatning) || console.log("Värde som nummer:", somNr);    //or false, and true för att kolla andra
!isNaN(inmatning) && console.log("Värde som nummer:", somNr);    //or false, and true för att kolla andra
//console.log(isNaN?'':'Värde')
//if (!isNaN(inmatning)) console.log("Värde som");


console.log("\nÖVNING 8");
{
let a = prompt("Ange ett första tal");
let b = prompt("Ange ett andra tal");
let op = prompt("Ange +-/*");
if (isNaN(a) || isNaN(b)) {
    console.log("Ange två number.");
}
else {
a = Number(a);
b = Number(b);
switch (op) {
    case '+':
        console.log(`${a} + ${b} = ${a + b}`);
        break;
    case '-':
        console.log(`${a} - ${b} = ${a - b}`);
        break;
    case '*':
        console.log(`${a} * ${b} = ${a * b}`);
        break;
    case '/':
        if (b == 0) {
            console.log("Ej tillåtet dela med 0.");
            break;
        }
        console.log(`${a} / ${b} = ${a / b}`);
        break;

    default:
        console.log("Välj en av +-*/");
        break;
}
}
}

console.log("\nÖVNING 9");
{
    let summa = 0, antal = 0;
    prompt("Ange tre tal").split(' ').forEach((n) => {
        if (!isNaN(n)) {
            summa += Number(n);
            antal++;
        }
    });
    //console.log(summa, antal);
    if (antal === 3) {
        const medel = summa / antal;
        console.log("Medelvärde:", medel.toFixed(2));
    }
    else {
        console.log("Du måste ange tre tal.");
    }
}

console.log("\nÖVNING 10")
{
    let favoritFilmer = ["Fast & furious", "Fast & furious 2", "Fast & furious 3"];
    favoritFilmer.push("Fast & furious 4");
    favoritFilmer[1] = "Fast & furious 2 (Collectors edition)";
    console.log("Antal favoritfilmer:", favoritFilmer.length);
    console.log("Alla favoritfilmer:",favoritFilmer.join(", "));
}

