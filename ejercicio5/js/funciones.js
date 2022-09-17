nombre = prompt('Ingrese el nombre del alunmo:');
nota1 = prompt('Ingrese 1ra. nota:');
nota2 = prompt('Ingrese 2da. nota:');

//Convertimos los 3 string en enteros
nota1 = parseInt(nota1);
nota2 = parseInt(nota2);
let pro;
pro = (nota1 + nota2) / 2;
if (pro >= 14) {
    document.write(nombre+'su promedio es');
} else {
    if (pro >=11 ) {
        document.write(nombre +'su promedio es');
    } else if (pro >=10 ){
        document.write(nombre +'desaprobado su promedio es');
    }
}