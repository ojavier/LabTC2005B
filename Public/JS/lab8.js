const readline = require('readline');
const fs = require('fs');

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






// Función para escribir un string en un archivo de texto
function escribirEnArchivo(nombreArchivo, contenido) {
    fs.writeFile(nombreArchivo, contenido, (err) => {
        if (err) {
            console.error("Ocurrió un error al escribir en el archivo:", err);
        } else {
            console.log("El archivo ha sido guardado correctamente.");
        }
    });
}

// Ejemplo de uso
const texto = "Este es el contenido que quiero guardar en un archivo.";
const nombreArchivo = "output.txt";

escribirEnArchivo("output.txt", `El texto se ha modificado`);

rl.close();
