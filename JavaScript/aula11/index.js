/*
alert('Com a nossa mensagem.')
window.alert('Mensagem')
window.confirm('Deseja realmente apagar?')
window.prompt('Digite o seu nome:')
*/

const confirma = confirm("Realmente deseja apagar?"); // salva com o valor definido pelo usuario
let num1 = prompt("Digite o primeiro numero:");
let num2 = prompt ("Digite o segundo numero");

num1 = Number(num1)
num2 = Number(num2)

let resultado = (num1 + num2)
window.alert(resultado)
