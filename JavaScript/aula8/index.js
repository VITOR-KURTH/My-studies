/*
Vitor Kurth Ferreira tem 17 anos, pesa 50 kg
tem 1.7 de altura e seu imc é de 17.301038062283737
Vitor nasceu em 2007
*/
const nome = 'Vitor';
const sobrenome = 'Kurth Ferreira'
const idade = 17;
const peso = 50;
const altura = 1.70;
let imc = peso / (altura * altura);
let anoNascimento = (2024 - idade);

console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg`);
console.log(`tem ${altura} e seu IMC é de ${imc}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`)

