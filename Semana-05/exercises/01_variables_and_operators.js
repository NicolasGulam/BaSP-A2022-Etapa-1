console.log('--EXERCISE 1: VARIABLES AND OPERATORS');

/* a. Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una 
3er variable.*/

console.log('-Exercise 1.a:');
var num1, num2, suma;
num1 = 10;
num2 = 22;
suma = num1 + num2;
console.log('The sum of both numbers is: ' + suma);

// b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.

console.log('-Exercise 1.b:');
var myName, mySurname, fullName;
myName = 'Nicolás';
mySurname = 'Gulam';
fullName = myName + ' ' + mySurname;
console.log(fullName);

/* c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el 
resultado de la suma en una 3er variable (utilizar length).*/

console.log('-Exercise 1.c:');
var phrase1, phrase2, phrasesLength;
phrase1 = 'Web';
phrase2 = 'Design';
phrasesLength = phrase1.length + phrase2.length;
console.log('The length of both phrases is: ' + phrasesLength);