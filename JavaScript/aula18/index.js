const pessoa1 = {
    nome:'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
        console.log(`A minha idade atual é ${this.idade}.`)
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();

// function criaPessoa (nome, sobrenome, idade) {
//     return {nome, sobrenome, idade};
// }

// const pessoa1 = criaPessoa('Luiz', 'Miranda', 25);
// const pessoa2 = criaPessoa('Maria', 'Oliveira', 32);
// const pessoa3 = criaPessoa('João', 'Otavio', 55);

// console.log(pessoa1.nome, pessoa2.sobrenome, pessoa3.idade)


// const pessoa1 = {
//     nome: 'Luiz',
//     sobrenome: 'Miranda',
//     idade: 25
// };

// console.log(pessoa1.nome);

// [] Array
// {} Objeto