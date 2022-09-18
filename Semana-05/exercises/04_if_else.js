console.log('--EXERCISE 4: IF ELSE');

/* a. Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5 
mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”.*/

console.log('-Exercise 4.a:');
var randomNumber = Math.random(0, 1);
randomNumber = Number(randomNumber.toFixed(2));
if(randomNumber >= 0.5){
    alert('Greater than 0,5' + ' the number is: ' + randomNumber);
} else{
    alert('Lower than 0,5' + ' the number is: ' + randomNumber);
}

/* b. Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
    i.   “Bebe” si la edad es menor a 2 años;
    ii.  “Niño” si la edad es entre 2 y 12 años;
    iii. “Adolescente” entre 13 y 19 años;
    iv.  “Joven” entre 20 y 30 años;
    v.   “Adulto” entre 31 y 60 años;
    vi.  “Adulto mayor” entre 61 y 75 años;
    vii. “Anciano” si es mayor a 75 años.*/

console.log('-Exercise 4.b:');
var randomAge = Math.floor(Math.random()*(0-100)+100);
if (randomAge < 2) {
    alert('Bebe' + ' and the age is: ' + randomAge);
} else if (randomAge >= 2 && randomAge <= 12){
    alert('Niño' + ' and the age is: ' + randomAge);
} else if (randomAge >= 13 && randomAge <= 19) {
    alert('Adolescente' + ' and the age is: ' + randomAge);
} else if (randomAge >= 20 && randomAge <= 30){
    alert('Joven' + ' and the age is: ' + randomAge);
} else if (randomAge >= 31 && randomAge <= 60) {
    alert('Adulto' + ' and the age is: ' + randomAge);
} else if (randomAge >= 61 && randomAge <= 75){
    alert('Adulto mayor' + ' and the age is: ' + randomAge);
} else if (randomAge > 75){
    alert('Anciano' + ' and the age is: ' + randomAge);
}