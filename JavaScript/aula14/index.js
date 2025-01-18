let num1 = 0.7;
let num2 = 0.1;

num1 += num2;
num1 += num2;
num1 += num2;

num1 = parseFloat(num1.toFixed(2))
console.log(num1,Number.isInteger(num1))
//console.log(num1.toString() + num2);
//num1 = num1.toString();
//console.log(num1.toString(2)) // mostra em binário
//console.log(num1.toFixed(2)) // mostra a quantidade de casas depois da virgula
//console.log(Number.isInteger(num1)); // mostra se o numero é inteiro
//let temp = num1 * 'Olá';
//console.log(isNaN(temp));

