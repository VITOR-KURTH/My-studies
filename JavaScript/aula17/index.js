const raizArrow = n => n ** 0.5; // arrow function
// |
// |
// V Mesma função
const raiz = function (n) { // função normal
    return Math.sqrt(n)
};

console.log(raiz(9));
console.log(raizArrow(9));


// function soma(x = 1,y = 1) { //Se eu não mandar um valor X e Y vão assumir o valor deles
//     const resultado = x + y; //Protegido pelo escopo da função
//     return resultado //Tudo abaixo de return não é executado
// }

// const resultado = soma(1);
// console.log(resultado)

// function saudacao(nome) {
//     return `Bom dia ${nome}!`;
// }

// const variavel = saudacao('Luiz');
// console.log(variavel);
