let nota1, nota2, nota3;
nota1 = prompt('Ingrese 1ra. nota:');
nota2 = prompt('Ingrese 2da. nota:');
nota3 = prompt('Ingrese 3ra. nota:');
//Convertimos los 3 string en enteros
nota1 = parseInt(nota1);
nota2 = parseInt(nota2);
nota3 = parseInt(nota3);
let pro;
pro = (nota1 + nota2 + nota3) / 3;
if (pro >= 14) {
    document.write('promovido');
} else {
    if (pro >=11 ) {
        document.write('recuperación');
    } else if (pro >=10 ){
        document.write('desaprobado');
    }
}