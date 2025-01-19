const alunos = ['Luiz', 'Maria', 'João'];

const listaAlunos = document.getElementById('alunos');

listaAlunos.innerHTML = alunos;

function Adiciona() {
    const novoAluno = window.prompt("Adicione o novo aluno:");
    alunos.push(novoAluno);
    listaAlunos.innerHTML = alunos;
}



//console.log(typeof alunos); //Array é objeto
//console.log(alunos instanceof Array); //Verifica se realmente é Array

//alunos.push('Luiza');
//alunos.push('Eduardo');

//console.log(alunos.slice(0, 3));

//delete alunos[1]; //deleta 
//console.log(alunos[1]);

//const removidoComeco = alunos.shift(); //Remove do começo do Array
//const removidoFim = alunos.pop(); //Remove do fim do Array
//console.log(removidoComeco, removidoFim);

//alunos.unshift('Luiza');
//alunos.unshift('Fábio'); //Adiciona no começo


//alunos.push('Luiza'); //Adiciona no fim
//alunos.push('Fábio'); 


//alunos[alunos.length] = 'Luiza';
//alunos[alunos.length] = 'Fábio';
//alunos[alunos.length] = 'Luana';

//alunos[0] = 'Eduardo'; //Altera o indice 0
//alunos[3] = 'Luiza'; //Adiciona no indice 3

//console.log(alunos)
//console.log(alunos[0])
//console.log(alunos[2])