// String = Texto | Number = numero
const nome = 'João';
console.log(nome)

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5
console.log(resultado, resultadoDuplicado, resultadoTriplicado)
console.log(typeof resultado)
console.log(primeiroNumero + segundoNumero)

// Não pode criar constantes com palavras reservadas
// Coonstantes precisam ter nomes significativos
// Não pode começar nome de uma constante com numero
// Não podem conter espaços ou traços 
// Utilizamos camelCase
// Case-sensitive
// Não pode modificar o valor de uma constante
// Não utilize var utilize const