/* Escribir un programa que permita ingresar 6 notas. Las notas se reparten de la siguiente manera: 2
notas de la unidad 1, 2 notas de la unidad 2 y 2 notas de la unidad 3. Se pide mostrar el promedio de
las notas de cada unidad y el promedio general de las 3 unidades

posibilidades 3! = 3*2*1 = 6

abc  -  321
acb  -  312
bac  -  231
bca  -  132
cab  -  213
cba  -  123



*/

const number = document.getElementById('numbers');
const resutl = document.getElementById('result');

let a=prompt('Introduzca el primer numero');
let b=prompt('Introduzca el segundo numero');
let c=prompt('Introduzca el tercer numero');

numbers.textContent = `Los numeros introducidos son ${a}, ${b}, ${c}`


// ejercicio//


if( a>=b && a>=c){
    if(b>c){
        resutl.textContent = `El orden es: ${a}, ${b}, ${c}`
    }else{
        resutl.textContent = `El orden es: ${a}, ${c}, ${b}`
    }

}else if(b>=a && b>=c){
    if(a>c){
        resutl.textContent = `El orden es: ${b}, ${a}, ${c}`
    }else{
        resutl.textContent = `El orden es: ${b}, ${c}, ${a}`
    }
}else if(c>=a && c>=b){
    if(a>b){
        resutl.textContent = `El orden es: ${c}, ${a}, ${b}`
    }else{
        resutl.textContent = `El orden es: ${c}, ${b}, ${a}`
    }


}