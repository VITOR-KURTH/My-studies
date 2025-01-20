function calculaIMC(peso, altura, IMC){
    peso = Number(document.getElementById('peso').value);
    altura = Number(document.getElementById('altura').value);
    IMC = peso / (altura * altura)
    const resultado = document.getElementById('resultado')
    if (IMC < 18.5){
        resultado.innerHTML = `Seu IMC é ${IMC.toFixed(2)} (Abaixo do peso)`;
        console.log(IMC)
    } else if (IMC >= 18.5 && IMC <= 24.9) {
        resultado.innerHTML = `Seu IMC é ${IMC.toFixed(2)} (Peso normal)`;
    } else if (IMC >= 25 && IMC <=29.9) {
        resultado.innerHTML = `Seu IMC é ${IMC.toFixed(2)} (Sobrepeso)`;
    } else if (IMC >= 30 && IMC <= 34.9) {
        resultado.innerHTML = `Seu IMC é ${IMC.toFixed(2)} (Obesidade grau 1)`;
    } else if (IMC >= 35 && IMC <= 39.9) {
        resultado.innerHTML = `Seu IMC é ${IMC.toFixed(2)} (Obesidade grau 2)`;
    } else if (IMC >= 40) {
        resultado.innerHTML = `Seu IMC é ${IMC.toFixed(2)} (Obesidade grau 3)`;
    } else if (peso !== Number) {
        resultado.innerHTML = `Peso inválido`;
    } else if (altura !== Number) {
        resultado.innerHTML = `Altura inválida`;
    } else if (peso < 20 || peso > 300) {
        resultado.innerHTML = "Peso inválido. Insira um valor entre 20 kg e 300 kg.";
        return;
    } else if (altura < 1.0 || altura > 2.5) {
        resultado.innerHTML = "Altura inválida. Insira um valor entre 1.0 m e 2.5 m.";
        return;
    }
}