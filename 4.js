
//ex 4 
// Crie um programa contendo uma função assíncrona que leia o conteúdo de um arquivo texto.txt (utilize o módulo “fs”). 
const fs = require('fs');

//O programa deve imprimir uma mensagem informando que o arquivo está sendo lido 
fs.readFile("texto.texto.txt", "utf-8", (err, data) => {
  console.log("Arquivo esta sendo lido!")

//e em seguida apresentar o conteúdo do arquivo texto através do console (stdout). 
  console.log("Conteúdo do arquivo:")	
  console.log(data);
});