//ex 2
// Escreva um programa que aceita um ou mais números como argumentos de linha de comando
var sum = 0;
for (i = 2; i < process.argv.length; i++) {
    sum += Number(process.argv[i]);
}
// Imprima a soma desses números no console (stdout).
console.log(sum);