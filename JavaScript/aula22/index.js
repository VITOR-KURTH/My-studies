/*
Operadores Lógicos
&& -> AND -> E -> Todas as expressões precisam ser verdadeiras para retornar true
|| -> OR -> OU -> Apenas uma expressão precisa ser verdadeira para retornar true
! -> NOT -> NÃO -> Inverte o valor de true e false
*/
const expressaoAnd = true && true && true;
const expressaoOr = false || true;
const expressaoNot = !false
console.log(expressaoAnd, expressaoOr, expressaoNot);