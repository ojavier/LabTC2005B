const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingresa números separados por comas: ", (input) => {
    let numeros = input.split(',').map(Number); // Convertir la cadena en un arreglo de números

    // Función para calcular el promedio de un arreglo de números
    function calcularPromedio(numeros) {
        if (numeros.length === 0) return 0;
        
        let suma = numeros.reduce((acc, num) => acc + num, 0);
        return suma / numeros.length;
    }

    // Calcular el promedio
    let promedio = calcularPromedio(numeros);

    // Mostrar el resultado en la consola
    console.log(`El promedio es: ${promedio}`);

    rl.close();
});
