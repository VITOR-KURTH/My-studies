function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR',{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try{
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora();
    console.log(hora);
} catch(err){
    console.log('Erro com data')
    console.log(err)
} finally{
    console.log('Tenha um bom dia')
}





// try {
//     // É executada quando não há erros
//     // console.log(a);
//     console.log('Abri um arquivo');
//     console.log('Manipulei o arquivo e gerou erro');
//     console.log('Fechei o arquivo');
    
//     try {
//         console.log(b);
//     } catch(e) {
//         console.log('Deu erro');
//     } finally {
//         console.log('Também sou finally')
//     }
// } catch (e) {
//     // É executado quando há erros
//     console.log('Tratando o erro');
// } finally {
//     // Sempre
//     console.log('FINALLY: Eu sempre sou executado');
// }