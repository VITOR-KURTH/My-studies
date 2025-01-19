/*
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - valores copiados

Referência (mutável) - array, object, function - Passados por referência
*/

const a = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};
const b = {...a};

a.nome = 'João';
console.log(a);
console.log(b);

// let a = [1, 2, 3];
// let b = [...a]; // Copia o valor de a
// let c = b;

// console.log(a, b); //Apontam para o mesmo valor da memória

// a.push(4);
// console.log(a, b);

// b.pop();
// console.log(a, b);

// a.push('Luiz');
// console.log(c)

// let a = 'A';
// let b = a; // Cópia
// console.log(a, b);

// a = 'Outra coisa';
// console.log(a, b);