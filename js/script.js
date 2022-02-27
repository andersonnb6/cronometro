var segundos = 0
var minutos = 0
var horas = 0
var intervalo
var printSeg
var printMin
var printHor
var printMls
var botaoIniciar

function iniciar() {
    intervalo = setInterval(cronometro, 1000);
    desativarIniciar()
}

function pausar() {
    clearInterval(intervalo)
    ativarIniciar()
}

function zerar() {
    clearInterval(intervalo)
    segundos = 0
    minutos = 0
    horas = 0
    document.getElementById("tempo").innerText = "00:00:00"
    ativarIniciar()
}

function desativarIniciar() {
    botaoIniciar = document.querySelector("#iniciar")
    botaoIniciar.disabled = true
}

function ativarIniciar() {
    botaoIniciar.disabled = false
}

function cronometro() {
    segundos++
    if (segundos > 59) {minutos++; segundos = 0}
    if (minutos > 59) {horas++; minutos = 0}
    if (horas > 23){horas = 0; minutos = 0, segundos = 0}
    escreverTempo()
}

function escreverTempo() {
    printSeg = ("00" + segundos).slice(-2)
    printMin = ("00" + minutos).slice(-2)
    printHor = ("00" + horas).slice(-2)
    
    document.getElementById('tempo').innerText = `${printHor}:${printMin}:${printSeg}`
}