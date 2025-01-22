function fizzBuzz(numero) {
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    return numero;
}

for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i))
}




// function FizzBuzz(num) {
//  if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
//  if (num % 3 === 0) return 'Fizz';
//  if (num % 5 === 0) return 'Buzz';
//  if (num % 3 !== 0 && num % 5 !== 0) return num
//  if (num !== Number) return num
 
// }

// console.log(FizzBuzz(15));

