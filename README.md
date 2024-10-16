# fjsx24vecka42

Grunderna i JavaScript

Tisdag 15 oktober:
Övningar 14 oktober: Variabler och data typer:

## 1 Övning (Lätt):
Uppgift:

Deklarera tre variabler: firstName, lastName och age.
Tilldela dem dina egna värden.
Använd console.log() för att skriva ut en mening som säger "Hej, jag heter [firstName] [lastName] och jag är [age] år gammal."
Syfte:

Öva på deklaration och initiering av variabler.
Använda strängkonkatenering eller template literals.

## 2 Övning: Byt värden mellan variabler (Lätt)
Uppgift:

Deklarera två variabler a och b och tilldela dem värdena 5 respektive 10.
Byt värdena mellan a och b så att a blir 10 och b blir 5.
Skriv ut värdena på a och b före och efter bytet.
Lösningstips:

Använd en tredje variabel som temporär lagring.

## 3 Övning: Konkatenering av strängar (Lätt)
Uppgift:

Deklarera tre variabler firstName, middleName och lastName och tilldela dem dina namn.
Skapa en variabel fullName som innehåller hela ditt namn genom att slå samman de tre variablerna.
Skriv ut fullName till konsolen.
Lösningstips:

Använd strängkonkatenering med + eller template literals med backticks `.

## 4 Övning (Medel):
Uppgift:

Skapa en variabel radius och tilldela den ett numeriskt värde.
Beräkna omkretsen och arean av en cirkel med denna radie.
Skriv ut resultaten med tydliga meddelanden i konsolen.
Formler:

Omkrets = 2 _ Math.PI _ radius
Area = Math.PI _ radius _ radius
Syfte:

Använda matematiska operationer och inbyggda matematiska metoder.
Förstå användningen av const för konstanter som Math.PI.

## 5 Övning: Typeof-operatorn (Medel)
Uppgift:

Deklarera variabler av olika datatyper: number, string, boolean, undefined, null, object.
Använd typeof för att skriva ut vilken datatyp varje variabel har.
Observera resultatet för null och diskutera varför det visar det det gör.
Lösningstips:

Var medveten om att typeof null ger ett oväntat resultat på grund av historiska skäl i JavaScript.

Diskussion:

typeof null returnerar "object" vilket är ett känt fel i JavaScript. null är egentligen en primitiv datatyp men rapporteras som ett objekt.

## 6 Övning: Implicit och explicit typkonvertering (Medel)
Uppgift:

Deklarera variablerna x = "5" (string) och y = 3 (number).
Utför följande operationer och skriv ut resultaten:
x + y
Number(x) + y
x \* y
x / y
x - y
x + y + y
x + (y + y)
Förklara skillnaderna i resultaten.
Lösningstips:

Förstå hur JavaScript hanterar typkonvertering vid olika operationer.

Diskussion:

När vi använder + med en sträng och ett tal, sker strängkonkatenering.
De andra aritmetiska operatorerna (\*, /, -) tvingar JavaScript att konvertera strängen till ett nummer.
Parenteser påverkar i vilken ordning operationerna utförs.

## 7 Övning: Skriv ett program för att kontrollera datatypen (Medel)
Uppgift:

Be användaren att mata in ett värde via prompt().
Spara värdet i en variabel.
Bestäm och skriv ut vilken datatyp värdet har.
Om värdet kan konverteras till ett nummer, skriv ut det nya värdet och dess datatyp.
Lösningstips:

Använd isNaN() för att kontrollera om värdet är ett nummer.
Använd Number() för att försöka konvertera strängen till ett nummer.

## 8 Övning: Skapa en enkel kalkylator för två tal (Svår)
Uppgift:

Be användaren att ange två tal via prompt().
Spara talen i variabler och konvertera dem till nummer.
Be användaren välja en operation: addition, subtraktion, multiplikation eller division.
Utför operationen och skriv ut resultatet.
Hantera fall där användaren matar in ogiltiga värden eller försöker dela med noll.
Lösningstips:

Använd switch eller if-else för att hantera val av operation.
Använd isNaN() för att kontrollera giltigheten av inmatade värden.

## 9 Övning (Svår):
Uppgift:

Be användaren att ange tre tal via prompt().
Konvertera inmatningen till nummer.
Beräkna medelvärdet av talen.
Hantera felaktig inmatning genom att kontrollera om värdena är nummer.
Skriv ut medelvärdet med två decimaler.
Syfte:

Öva på användarinmatning och typkonvertering.
Introducera enkel felhantering.
Använda metoder som Number() och toFixed().

## 10 Övning: Skapa en lista över favoritfilmer (Svår)
Uppgift:

Deklarera en array favoriteMovies och lägg till tre av dina favoritfilmer som strängar.
Lägg till ytterligare en film till arrayen.
Ändra värdet på den andra filmen.
Skriv ut antalet filmer i listan och alla filmerna.
Lösningstips:

Använd metoder som push() för att lägga till element.
Kom ihåg att array-index börjar på 0.

## 11 Övning: Skapa ett objekt för en bok (Svår)
Uppgift:

Skapa ett objekt book med egenskaperna title, author, pages och isAvailable.
Tilldela lämpliga värden till egenskaperna.
Skriv en funktion printBookInfo() som skriver ut all information om boken.
Ändra värdet på isAvailable och kör funktionen igen.
Lösningstips:

Använd punktnotation för att komma åt och ändra egenskaper.

Ytterligare Övningar (För den som vill utmana sig själv)

## 12 Övning (Avancerad):
Uppgift:

Skriv ett program som omvandlar temperatur från Celsius till Fahrenheit.
Be användaren ange temperaturen i Celsius.
Använd formeln: Fahrenheit = Celsius \* 9/5 + 32.
Skriv ut resultatet med en tydlig beskrivning.
Syfte:

Använda matematiska operationer.
Öva på in- och utmatning.

## 13 Övning (Avancerad):
Uppgift:

Skapa ett enkelt BMI-kalkylator.
Be användaren ange sin längd i meter och vikt i kilogram.
Beräkna BMI med formeln: BMI = vikt / (längd \* längd).
Skriv ut BMI-värdet med två decimaler.
Syfte:

Kombinera flera variabler och operationer.
Hantera flyttal och formattering.

## 14 Övning: Konvertera mellan olika datatyper (Avancerad)
Uppgift:

Be användaren att ange ett värde.
Kontrollera om värdet är ett nummer, sträng, boolean eller något annat.
Om det är ett nummer, konvertera det till en sträng och vice versa.
Om det är en boolean, konvertera det till en sträng och ett nummer.
Skriv ut alla resultaten med beskrivningar.
Lösningstips:

Använd funktioner som String(), Number() och Boolean().
