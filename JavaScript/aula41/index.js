// Escreva uma função que recebe 2 número e retorne o maior deles


function retornaMaior(x, y){
    // if (x > y) return x;
    // return y;
    return x > y ? x : y;
}

const retornaMaior2 = (x, y) =>  x > y ? x : y;


console.log(retornaMaior(10, 5))



// function retornaMaior(num1, num2){
//     num1 = 14;
//     num2 = 14;
//     if(num1 > num2) {
//         console.log(num1)
//     } else if (num1 < num2) {
//         console.log(num2)
//     } else {
//         console.log('Numeros iguais');
//     }
// }

// retornaMaior();