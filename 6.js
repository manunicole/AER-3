//ex 6
//Crie um programa que grava texto em um arquivo já existente, sem sobrescrever o conteúdo original. 
const fs = require('fs');
fs.appendFile("text.txt", 'Hello World!',function(err){
if(err) throw err;
console.log('Hello World!')
});
//Logo em seguida o programa deve ler e imprimir no console (stdout) o conteúdo completo do arquivo.
fs.readFile("text.txt", "utf-8", (err, data) => {
  console.log(data);
});