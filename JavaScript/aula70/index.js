// Factory functions / Constructor functions / Classes
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this);
}

// {} <- this -> this 
const p1 = new Pessoa('Luiz', 'Miranda');
delete p1.nome;
const p2 = new Pessoa('Luiz', 'Miranda');

console.log(p1);
console.log(p2);
