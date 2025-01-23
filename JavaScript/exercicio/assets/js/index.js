// Exercício 1: Conversão de Temperatura
(function ConverteFahrenheit(Celcius) {
    const fahrenheit = (Celcius * 9/5) + 32;
    return console.log(`${Celcius} convertido para fahrenheit é: ${fahrenheit}`)
})(32);

// //Exercício 2: Verificar Maior Número
(function verificaMaior(num1, num2){
    console.log(
        num1 === num2 ? 'Os numeros são iguais' : `${num1 > num2 ? `${num1} é maior` : `${num2} é maior`}`
    )
})(88,8);

//Exercício 3: Tabuada
(function tabuada(num){
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (let i of numeros) {
        console.log(`${num} x ${i ++} = ${i  * num}`);
    }
})(2);


//Exercício 4: Número Par ou Ímpar
(function imparPar(num){
    console.log(num % 2 === 0 ? `${num} é par` : `${num} é ímpar`)
})(2);

//Exercício 5: Soma dos Números
(function somaNumeros(num1, num2) {
    let soma = 0; 
    for (let i = num1 + 1; i < num2; i++) {
        soma += i; 
    }
    soma += num1 + num2; 
    console.log(`A soma é: ${soma}`);
})(3, 6);

//Exercício 6: Fatorial
(function fatorial(num) {
    let resultado = 1; 
    for (let i = 1; i <= num; i++) { 
        resultado *= i; 
    }
    console.log(`O fatorial de ${num} é: ${resultado}`);
})(5);
