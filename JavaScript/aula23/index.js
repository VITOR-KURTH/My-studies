/*
&& -> false && true -> false "o valor mesmo"
|| -> true || false -> vai retornar "o valor verdadeiro"

FALSY
false
0
'' "" `` string vazia
null / undefined
NaN
*/

const a = 0;
const b = null;
const c = false;
const d = false;
const e = NaN;

console.log(a || b || c || d || e)

// const corUsuario =  'vermelho';
// const corPadrao = corUsuario || 'preto';

// console.log(corPadrao);

// console.log(0 || false || 'Luiz Otávio' || true)

// console.log('Luiz Otávio' && true && '') //Retorna o valor false

// function falaOi() {
//     return 'Oi';
// }

// const vaiExecutar = false;

// console.log(vaiExecutar && falaOi());