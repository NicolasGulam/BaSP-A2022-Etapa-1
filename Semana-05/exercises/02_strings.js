console.log('--EXERCISE 2: STRINGS');

/* a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula 
(utilizar toUpperCase).*/

console.log('-Exercise 2.a:');
var phrase3 = 'To tolerate or endure through the unexpected mishappenings you may encounter from time to time.'
console.log(phrase3.toUpperCase());

/* b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 
caracteres guardando el resultado en una nueva variable (utilizar substring).*/

console.log('-Exercise 2.b:');
var phrase4, phrase5;
phrase4 = 'Said when things are about to get serious.';
phrase5 = phrase4.substring(0,5);
console.log(phrase5);

/* c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 
caracteres guardando el resultado en una nueva variable (utilizar substring).*/

console.log('-Exercise 2.c:');
var phrase6, phrase7;
phrase6 = 'Roses are red, violets are blue'
phrase7 = phrase6.substring(phrase6.length - 3, phrase6.length);
console.log(phrase7);