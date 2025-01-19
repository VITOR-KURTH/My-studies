const numero = Number(window.prompt("Digite um número:"));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Seu número é ${numero}<br/>
Raiz quadrada: ${Math.sqrt(numero)}<br/>
${numero} é inteiro: ${Number.isInteger(numero)}<br/>
É NaN: ${isNaN(numero)}<br/>
Arredondando pra baixo: ${Math.ceil(numero)}<br/>
Arredondadanddo pra cima: ${Math.floor(numero)}<br/>
Com duas casas decimais: ${numero.toFixed(2)}
</p>`