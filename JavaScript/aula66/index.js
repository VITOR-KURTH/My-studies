// Dobre os números
// const numeros = [5, 50, 80, 1, 2, 5, 8, 7, 11, 15, 22, 27];
// const numerosEmDobro = numeros.map(valor => valor * 2);
// console.log(numerosEmDobro);

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

const nomes = pessoas.map(obj => obj.nome);
const idades = pessoas.map(obj => obj.idade);
console.log(nomes);
console.log(idades);

const comIds = pessoas.map(function(obj) {
    const newObj = { ...obj };
    newObj.id = aleatorio();
    return newObj;

});

console.log(pessoas);
console.log(comIds);


function aleatorio() {
    const numero = Math.random() * (10000 - 1000) + 1000;
    return Math.round(numero)
}

