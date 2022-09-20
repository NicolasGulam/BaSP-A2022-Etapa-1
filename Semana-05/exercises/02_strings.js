console.log('--EXERCISE 2: STRINGS');

/* a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula 
(utilizar toUpperCase).*/

console.log('-Exercise 2.a:');
var phrase3 = 'To tolerate or endure through the unexpected mishappenings you may encounter from time to time.';
console.log('All the phrase in Upper Case: ', phrase3.toUpperCase());

/* b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 
caracteres guardando el resultado en una nueva variable (utilizar substring).*/

console.log('-Exercise 2.b:');
var phrase4, phrase5;
phrase4 = 'Said when things are about to get serious.';
phrase5 = phrase4.substring(0,5);
console.log('Only the first 5 characters of the phrase are: ', phrase5);

/* c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 
caracteres guardando el resultado en una nueva variable (utilizar substring).*/

console.log('-Exercise 2.c:');
var phrase6, phrase7;
phrase6 = 'Roses are red, violets are blue';
phrase7 = phrase6.substring(phrase6.length - 3, phrase6.length);
console.log('Only the final 3 characters of the phrase are: ', phrase7);

/* d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en 
mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, 
toLowerCase y el operador +).*/

console.log('-Exercise 2.d:');
var phrase8, phrase9;
phrase8 = 'Used as an advanced warning. To become keenly aware.';
phrase9 = phrase8.substring(0,1).toUpperCase() + phrase8.substring(1).toLowerCase();
console.log('The phrase only with the first letter in Upper Case : ', phrase9);

/* e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del 
primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/

console.log('-Exercise 2.e:');
var phrase10 = 'Teacher of math';
console.log('The first space is at the location: ' + phrase10.indexOf(' '));

/* f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). 
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas 
palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el 
operador +).*/

console.log('-Exercise 2.f:');
var phrase11, phrase12;
phrase11 = 'miracle channel';
phrase12 = phrase11.substring(0,1).toUpperCase() + phrase11.substring(1, phrase11.indexOf(' ') + 1).toLowerCase() + 
phrase11.substring(phrase11.indexOf(' ') + 1, phrase11.indexOf(' ') + 2).toUpperCase() + 
phrase11.substring(phrase11.indexOf(' ') + 2).toLowerCase();
console.log('Every word only with the first letter in Upper Case : ', phrase12);