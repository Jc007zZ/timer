import {Timer} from "./timer.js"

let secondsUnit = 0
let secondsTen = 0
let minutesUnit = 0
let minutesTen = 0
let interval
let timer

timer  = Timer({secondsUnit, secondsTen, minutesUnit, minutesTen, interval})

document.querySelector(".fa-play").addEventListener('click', () => {timer.init()})
document.querySelector(".fa-pause").addEventListener('click', () => {timer.pause()})
document.querySelector(".fa-square").addEventListener('click', () => {timer.stop()})

 






