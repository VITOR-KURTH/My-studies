// For in -> Lê os índices ou chaves do objeto
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
};

for (let chave in pessoa){
    console.log(chave, pessoa[chave]);
}

// const frutas = ['Pera', 'Maçã', 'Uva'];

// for (let index in frutas) {
//     console.log(frutas[index]);
// }

// for (let i = 0; i < frutas.length; i++){
//     console.log(frutas[i]);
// }
