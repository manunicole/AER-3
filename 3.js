//ex 3
//Crie um módulo local simples chamado data capaz de informar a data e a hora atual.
let ts = Date.now();
let date_obj = new Date(ts);

//  A seguir,crie um programa com algum código que requeira este módulo 
let date = date_obj.getDate();
let month = date_obj.getMonth() + 1;
let year = date_obj.getFullYear();

let hours = date_obj.getHours();
let minutes = date_obj.getMinutes();
let seconds = date_obj.getSeconds();

//e faça com que ele exiba a hora atual através do console (stdout).
console.log("Horário: " + hours + ":" + minutes + ":" + seconds);