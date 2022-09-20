console.log('--EXERCISE 6: FUNCTIONS');

/* a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el 
resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.*/

console.log('-Exercise 6.a:');
function addition(num1, num2){
    return num1+num2;
}
num1 = Math.floor(Math.random()*(0-100)+100);
num2 = Math.floor(Math.random()*(0-100)+100);
console.log("The result of both numbers is:", addition(num1, num2));

/* b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número; 
de no ser un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como 
resultado.*/

console.log('-Exercise 6.b:');
function additionWithValidation(num1, num2){
    if (typeof num1 === 'number' && typeof num2 === 'number'){
        return num1+num2;
    } else{
        alert('One of the parameters has an error');
        return NaN;
    }
}
num2 = Math.floor(Math.random()*(0-100)+100);
console.log('The result with validation if one of the parameters has an error: ', additionWithValidation('ab', num2));
console.log('The result with validation if one of the parameters without an error: ', additionWithValidation(5, num2));

/* c. Aparte, crear una función validate Integer que reciba un número como parámetro y devuelva verdadero si es un 
número entero.*/

console.log('-Exercise 6.c:');
function validateInteger(num){
    return Number.isInteger(num);
}
console.log('Is 5 an integer? ', validateInteger(5));
console.log('Is 5.5 an integer? ', validateInteger(5.5));

/* d. A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c. y que valide que los 
números sean enteros. En caso que haya decimales mostrar un alerta con el error y retornar el número convertido a 
entero (redondeado).*/

console.log('-Exercise 6.d:');
function additionNumberWithValidation(num1, num2){
    if (typeof num1 === 'number' && typeof num2 === 'number'){
        if (!validateInteger(num1)){
            alert('Error, the first number is not an Integer');
            num1 = Math.round(num1);
        }
        if (!validateInteger(num2)){
            alert('Error, the second number is not an Integer');
            num2 = Math.round(num2);
        }
        return addition(num1, num2);
    } else{
        alert('One of the parameters has an error');
        return NaN;
    }
}
console.log('The result of the sum of 17.5 and 10 with validation with error is: ', 
additionNumberWithValidation(17.5, 10));
console.log('The result of the sum of 5 and 8 with validation without error is:', 
additionNumberWithValidation(5, 8));

/* e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando 
que todo siga funcionando igual*/

console.log('-Exercise 6.e:');
function lastAddition(num1, num2) {
    num1 = lastValidate(num1);
    num2 = lastValidate(num2);
    return num1+num2;
}
function lastValidate(num) {
    if (typeof num === 'number'){
        if (!validateInteger(num)){
            alert('Error, one or both numbers are not an Integer');
            num = Math.round(num);
            return num;
        } else{
            return num;
        }
    } else{
        alert('One of the parameters has an error');
        return NaN;
    }
}
console.log('The result of the sum of 17.5 and 10 with validation with error is: ', 
lastAddition(17.5, 10));
console.log('The result of the sum of 5 and 8 with validation without error is:', 
lastAddition(5, 8));