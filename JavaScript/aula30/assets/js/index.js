const h1 = document.querySelector('.container h1');
const data = new Date();

function getDiaSemanaTexto (diaSemana){
   const diasSemana = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sabado'];
   return diasSemana[diaSemana];
}

function getNomeMes (NumeroMes){
    const meses = ['janeiro', 'fevereiro', 'março', 'abril','maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    return meses[NumeroMes];
}

function zeroAEsquerda (num) {
    return num >+ 10 ? num : `0${num}`
}

function criaData(data) {
    const diaSemana = data.getDay();
    const NumeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(NumeroMes);

    return (
        `${nomeDia}, ${data.getDate()} de ${nomeMes}` +
        ` de ${data.getFullYear()} ` +
        `${data.getHours()}:${zeroAEsquerda(data.getMinutes())}`
);

}

h1.innerHTML = criaData(data);

// const h1 = document.querySelector('.container h1');
// const data = new Date();
// h1.innerHTML = data.toLocaleString('pt-BR', {
//   dateStyle: 'full',
//   timeStyle: 'short'
// });
