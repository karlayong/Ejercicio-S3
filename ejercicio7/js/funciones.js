/* Ingresar un número diferente de cero e indicar si es positivo o negativo*/

const number = document.getElementById('numbers');
const resutl = document.getElementById('result');

let a=prompt('Introduzca el primer numero');


numbers.textContent = `El numero introducido es ${a}`


// ejercicio//

if (a>= 0) {
    resutl.textContent = `El número es POSITIVO`

}else {
    resutl.textContent = `El número es NEGATIVO`
 }

    
  