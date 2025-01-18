let varA = 'A' //B
let varB = 'B' //C
let varC = 'C' //A

const varAA = varB
varB = varC
varD = varA 

console.log(varAA, varB, varD)