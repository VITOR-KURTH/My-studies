// argumentos que sustenta todos os argumentos enviados
const conta = (...args) => {
    console.log(args);
};

conta('+', 0, 20, 30, 40, 50);

// const conta = function(operador, acumulador, ...numeros) {
//     for (let numero of numeros) {
//         if (operador === '+') acumulador += numero;
//         if (operador === '-') acumulador -= numero;
//         if (operador === '/') acumulador /= numero;
//         if (operador === '*') acumulador *= numero;
//     }
//     console.log(acumulador)
// };

// conta('+', 0, 20, 30, 40, 50);

// function funcao(a, b, c) {
//     let total = 0;
//     for (let argumento of arguments) {
//         total += argumento;
//     }
//     console.log(total, a, b, c);
// }

// funcao(1, 2, 3, 4, 5, 6, 7);