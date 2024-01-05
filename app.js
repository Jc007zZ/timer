import {Timer} from "./timer.js"


let segundo1 = 0
let segundo2 = 0
let minutos1 = 0
let minutos2 = 0
let tempo
let intervalo
let rodando
let timer





 timer  = Timer({
    segundo1, 
     segundo2,
     minutos1,
     minutos2,
     tempo,
     intervalo,
     rodando,
    })

    document.querySelector(".fa-play").addEventListener('click', () => {timer.init()})
    document.querySelector(".fa-pause").addEventListener('click', () => {timer.pause()})
    document.querySelector(".fa-square").addEventListener('click', () => {timer.stop()})

 






