// ex 6
// Crie um programa que delete o arquivo criado no exemplo anterior. 
const fs = require('fs');
const path = 'pasta/text.txt';
const folder = 'pasta/AER3/';

fs.unlink(path, (err) => {
  if (err) {
    console.error(err)
    return
  }

  //O programa também deve ler o diretório atual e imprimir seu conteúdo no console (stdout).
  console.log("Removido com sucesso.");
})

fs.readdir(folder, (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
});