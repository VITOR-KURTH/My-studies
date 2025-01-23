// Factory function (função fabrica)
// Constructor function (função construtora)
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, 
        sobrenome,
        // Getter
        get nomeCompleto (){
            return `${this.nome} ${this.sobrenome}`
        },
        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala(assunto = 'Maria está falando sobre nada') {
            return `${this.nome} está ${assunto}.`;
        },
        altura: altura,
        peso: peso,
        //Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2)
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.80, 80);
console.log(p1)


