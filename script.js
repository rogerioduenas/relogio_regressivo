"use strict"
//acrescenta um zero e slice corta 2 numeros da direita pra esquerda
const formatarDigito = (digito) => `0${digito}`.slice(-2);
const atualizarTempo = (tempo) => {
    //coleta id de segundos que é segundos huasuhasuh
    const segundos = document.getElementById("segundos");
    const minutos = document.getElementById("minutos");
    const horas = document.getElementById("horas");
    const dias = document.getElementById("dias");
    //retorna a sobra
    const qtdSegundos = tempo % 60;
    // nao entendi a formula
    const qtdMinutos = Math.floor((tempo % (60 * 60)) / 60);
    const qtdHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60));
    const qtdDias = Math.floor(tempo / (60 * 60 * 24));
    //adiciona tempo atual no DOM
    segundos.textContent = formatarDigito(qtdSegundos);
    minutos.textContent = formatarDigito(qtdMinutos);
    horas.textContent = formatarDigito(qtdHoras);
    dias.textContent = formatarDigito(qtdDias);
}
const contagemRegressiva = (tempo) => {
    //breca o setinterval com var brake linha 13
    const pararContagem = () => clearInterval(brake);
    const contar = () => {
        if (tempo == 0) {
            pararContagem();
        }
        atualizarTempo(tempo);
        tempo--;
    }
    //executa a funçao(callback) contar a cada 1 segundo
    const brake = setInterval(contar, 1000);
}
const tempoRestante = () => {
    const dataEvento = new Date ("2021-06-18 17:00:00");
    const hoje = Date.now();
    return Math.floor((dataEvento - hoje) / 1000);
}
//conta do 5 pra tras
contagemRegressiva(tempoRestante());