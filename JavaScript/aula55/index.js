// IIFE -> Immediately invoked function expression
(function(idade, peso, altura) {
    const sobrenome = 'Kurth'
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }
    
    function falaNome() {
        console.log(criaNome('Vitor'))
    }
    
    falaNome();
    console.log(idade, peso, altura);
})(17, 50, 1.70);