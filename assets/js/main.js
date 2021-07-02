//Desafío - Multiplicación

//El usuario ingresa un número
let num1 = prompt( "Ingrese un numero entre 1 y 20", "" );

const check = (numb) => {
if ( numb >=1 && numb <=20) {

    // Creación tabla multiplicacion
    for (let mult = 1; mult <= numb; mult++) {
       console.log (`${mult} x ${numb} = ${mult * numb}`);
    }

    // conseguir el factorial 
    for (let factorial = 1; factorial <= numb; factorial++) {

        let result = 1;
    
        for (let factorialIter = 1; factorialIter<=factorial; factorialIter++) {
            result = result * factorialIter;  
        }
        
        console.log (`El factorial de ${factorial} es: ${result}`);
     }
       
} else console.log (`Número ingresado fuera de rango`);
}

// Imprimir 
console.log (check(Number.parseInt(num1)));