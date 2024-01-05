import {Timer} from "./timer.js"

let seconds1 = 0
let seconds2 = 0
let minutes1 = 0
let minutes2 = 0
let interval
let running
let timer

timer  = Timer({seconds1, seconds2, minutes1, minutes2, interval, running,})

document.querySelector(".fa-play").addEventListener('click', () => {timer.init()})
document.querySelector(".fa-pause").addEventListener('click', () => {timer.pause()})
document.querySelector(".fa-square").addEventListener('click', () => {timer.stop()})

 






