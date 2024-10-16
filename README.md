fjsx24vecka42
Grunderna i JavaScript

# Onsdag 16 oktober: Fortsättning från igår + operatorer:

## Övning 1: Grundläggande Aritmetiska Operationer (Lätt)
Uppgift:
Deklarera två variabler a och b med värdena 12 och 5.
Beräkna och skriv ut summan, differensen, produkten, kvoten och resten av a och b.

Exempel på utskrift:

makefile
Kopiera kod
a = 12, b = 5
Summa: 17
Differens: 7
Produkt: 60
Kvot: 2.4
Rest: 2

## Övning 2: Temperaturkonvertering (Lätt)
Uppgift:
Skriv ett program som omvandlar temperatur från Celsius till Fahrenheit.
Be användaren ange temperaturen i Celsius.
Använd formeln F = C \* 9/5 + 32.
Skriv ut resultatet.

## Övning 3: Jämförelseoperatorer (Medel)
Uppgift:
Be användaren ange två tal.
Jämför talen och skriv ut vilket som är störst, eller om de är lika.

## Övning 4: Even eller Udda (Medel)
Uppgift:
Skriv ett program som ber användaren ange ett tal.
Använd modulusoperatorn % för att avgöra om talet är jämnt eller udda.
Skriv ut resultatet.

## Övning 5: Logiska Operatorer (Medel)
Uppgift:
Be användaren ange sin ålder och om de har giltig legitimation (true/false).
Använd logiska operatorer för att avgöra om personen får komma in på en klubb (minst 18 år och giltig legitimation).
Skriv ut om de får komma in eller inte.

## Övning 6: Enkel Kalkylator (Medel)
Uppgift:
Skriv ett program som ber användaren ange två tal och en operator (+, -, \*, /, %).
Utför operationen och skriv ut resultatet.
Hantera division med noll genom att kontrollera om nämnaren är noll.

## Övning 7: Strikt vs Lös Jämförelse (Medel)
Uppgift:
Deklarera variablerna let x = '10'; och let y = 10;.
Jämför x och y med == och ===.
Förklara skillnaden i en kommentar.

## Övning 8: Ålderskontroll (Medel)
Uppgift:
Skriv ett program som ber användaren ange sin ålder.
Om åldern är mellan 13 och 19 (inklusive), skriv ut "Du är tonåring."
Annars, skriv ut "Du är inte tonåring."

## Övning 9: Max av Tre Tal (Svår)
Uppgift:
Be användaren ange tre tal.
Använd jämförelseoperatorer för att bestämma vilket tal som är störst.
Skriv ut det största talet.

## Övning 10: Enkel Lösenordsvalidering (Svår)
Uppgift:
Be användaren ange ett lösenord.
Kontrollera att lösenordet är minst 8 tecken långt och innehåller minst en siffra.
Använd logiska operatorer för att kombinera villkoren.
Skriv ut om lösenordet är giltigt eller inte.

## Övning 11: Skottårskoll (Svår)
Uppgift:
Be användaren ange ett årtal.
Avgör om året är ett skottår.
Ett år är ett skottår om det är jämnt delbart med 4 men inte med 100, om det inte också är delbart med 400.

## Övning 12: BMI-Kalkylator (Svår)
Uppgift:
Be användaren ange sin vikt i kilogram och längd i meter.
Beräkna BMI med formeln BMI = vikt / (längd \* längd).
Använd jämförelseoperatorer för att kategorisera BMI:
Under 18.5: Undervikt
18.5 - 24.9: Normalvikt
25 - 29.9: Övervikt
30 och över: Fetma
Skriv ut BMI-värdet och kategorin.

## Övning 13: Logiska Operatorer - Sanningstabell (Avancerad)
Uppgift:
Skapa en sanningstabell för logiska operatorer &&, ||, !.
Visa resultatet av alla kombinationer av true och false.

Exempel på utskrift:

A B A && B A || B !A
true true true true false
true false false true false
false true false true true
false false false false true

## Övning 14: FizzBuzz (Avancerad)
Uppgift:
Skriv ett program som skriver ut talen från 1 till 30.
För multiplar av 3, skriv ut "Fizz" istället för talet.
För multiplar av 5, skriv ut "Buzz".
För tal som är multiplar av både 3 och 5, skriv ut "FizzBuzz".

## Övning 15: Nummergissningsspel (Avancerad)
Uppgift:
Programmet ska generera ett slumpmässigt tal mellan 1 och 100.
Be användaren gissa talet.
Använd jämförelseoperatorer för att ge feedback om gissningen är för hög, för låg eller korrekt.
Låt användaren fortsätta gissa tills de hittar rätt tal.

---

Torsdag 17 oktober: Övningar för Inbyggda Funktioner och Metoder per Datatyp:

<--------------String------------>

## Övning 1: Använda toUpperCase() och toLowerCase() (Lätt)
Uppgift:

Be användaren ange en mening.
Konvertera hela meningen till versaler och skriv ut resultatet.
Konvertera hela meningen till gemener och skriv ut resultatet.

## Övning 2: Använda charAt() och slice() (Lätt)
Uppgift:

Deklarera en strängvariabel med värdet "JavaScript".
Skriv ut det första tecknet i strängen med charAt().
Skapa en ny sträng som innehåller de första fyra tecknen i originalsträngen med slice().

## Övning 3: Använda split() och join() (Medel)
Uppgift:

Be användaren ange en lista med ord separerade med kommatecken, t.ex. "äpple,banan,apelsin".
Dela upp strängen till en array med ord med hjälp av split().
Skriv ut arrayen.
Sätt samman arrayen till en ny sträng där orden är separerade med mellanslag med hjälp av join().

## Övning 4: Använda replace() och includes() (Medel)
Uppgift:

Deklarera en strängvariabel med värdet "Jag älskar programmering".
Kontrollera om strängen innehåller ordet "programmering" med includes().
Ersätt ordet "programmering" med "JavaScript" med replace().
Skriv ut den nya strängen.

## Övning 5: Använda trim() och substring() (Medel)
Uppgift:

Be användaren ange en sträng med extra mellanslag i början och slutet.
Ta bort överflödiga mellanslag med trim().
Extrahera de fem första tecknen i den trimmade strängen med substring().
Skriv ut resultatet.

<--------------Number-------------->

## Övning 6: Använda toFixed() (Lätt)
Uppgift:

Be användaren ange ett flyttal med många decimaler.
Konvertera talet till en sträng med två decimaler med toFixed(2).
Skriv ut resultatet.

## Övning 7: Använda parseInt() och parseFloat() (Lätt)
Uppgift:

Be användaren ange en sträng som innehåller ett tal, t.ex. "123abc".
Använd parseInt() för att extrahera heltalsdelen.
Använd parseFloat() för att extrahera flyttalsdelen (om tillämpligt).
Skriv ut båda resultaten.

## Övning 8: Använda isNaN() och isFinite() (Medel)
Uppgift:

Skapa en funktion som tar en parameter och kontrollerar om värdet är ett giltigt, ändligt tal.
Om värdet är ett giltigt tal, skriv ut "Giltigt tal".
Om värdet inte är ett tal eller inte är ändligt, skriv ut lämpligt meddelande.

## Övning 9: Använda toPrecision() och toExponential() (Medel)
Uppgift:

Be användaren ange ett tal.
Visa talet med tre signifikanta siffror med toPrecision(3).
Visa talet i exponentiell form med två decimaler med toExponential(2).

<--------------BigInt-------------->

## Övning 10: Skapa och använda BigInt (Medel)
Uppgift:

Skapa två stora tal med BigInt, t.ex. let bigA = BigInt("12345678901234567890");
Utför en multiplikation mellan de två talen.
Skriv ut resultatet.

## Övning 11: Använda aritmetiska operatorer med BigInt (Svår)
Uppgift:

Skapa ett BigInt-tal från ett vanligt tal och ett från en sträng.
Utför addition, subtraktion, division och modulus.
Var noga med att båda operandena är BigInt.

<--------------Boolean-------------->

## Övning 12: Omvandla värden till Boolean (Lätt)
Uppgift:

Skapa en array med olika värden: 0, 1, "", "hej", null, undefined, {}, [].
Använd Boolean() för att omvandla varje värde till en boolean.
Skriv ut resultatet.

## Övning 13: Använda logiska operatorer (Medel)
Uppgift:

Be användaren ange två sanningsvärden (true eller false).
Konvertera inmatningen till booleaner.
Utför logiska operationer &&, ||, ! på värdena och skriv ut resultaten.

<--------------Undefined och Null-------------->

## Övning 14: Skillnaden mellan undefined och null (Medel)
Uppgift:

Deklarera en variabel utan att tilldela den något värde.
Deklarera en annan variabel och tilldela den värdet null.
Skriv ut båda variablernas värden och använd typeof för att visa deras datatyper.

<--------------Object-------------->

## Övning 15: Använda Object.keys(), Object.values(), Object.entries() (Medel)
Uppgift:

Skapa ett objekt person med egenskaperna namn, ålder och stad.
Använd Object.keys() för att skriva ut alla egenskapsnamn.
Använd Object.values() för att skriva ut alla värden.
Använd Object.entries() för att skriva ut alla nyckel-värde-par.

## Övning 16: Använda Object.assign() (Medel)
Uppgift:

Skapa två objekt, obj1 med egenskaperna { a: 1, b: 2 } och obj2 med { b: 3, c: 4 }.
Använd Object.assign() för att kopiera egenskaperna från obj2 till obj1.
Skriv ut det resulterande objektet.

## Övning 17: Använda Object.freeze() och Object.seal() (Svår)
Uppgift:

Skapa ett objekt data med egenskaperna { x: 10, y: 20 }.
Använd Object.freeze(data) och försök sedan ändra värdet på x och lägga till en ny egenskap z.
Skriv ut objektet och observera vad som händer.
Gör om objektet utan Object.freeze() men använd istället Object.seal(data).
Försök ändra x och lägga till z igen och observera skillnaden.

## Övning 18: Använda Object.create() (Svår)
Uppgift:

Skapa ett objekt animal med egenskapen isAlive: true och metoden eat() som skriver ut "Äter...".
Använd Object.create(animal) för att skapa ett nytt objekt dog.
Lägg till egenskapen breed till dog.
Anropa metoden eat() på dog och skriv ut värdet av isAlive.
