const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

const { nome, sobrenome, ...resto} = pessoa;
console.log(nome, sobrenome, resto);

// Atribuição via desestruturação
// const { endereco: {rua: r = 12345, numero}, endereco} = pessoa;
// console.log(r, numero, endereco);