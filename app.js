

let segundo1 = 0
let segundo2 = 0
let minutos1 = 0
let minutos2 = 0
let tempo
let intervalo
let rodando

function init() {
    if(! rodando) {
     intervalo = setInterval(() => {
        
        segundo1++
        if(segundo1 >= 10) {
            segundo1 = 0
            segundo2++
        }
    
        if(segundo2 >= 6 ) {
            minutos1++
            segundo2 = 0
        }
    
        if( minutos1 >= 10){
            minutos2++
            minutos1 = 0
        }
    
        
        document.getElementById("1").textContent = minutos2
        document.getElementById("2").textContent = minutos1
        document.getElementById("3").textContent = segundo2
        document.getElementById("4").textContent = segundo1
        
    
        console.log(minutos2, minutos1, segundo2, segundo1)
        
        
    }, 1000);
}
    rodando = true
}


function stop() {
     clearInterval(intervalo)
     rodando = false
     segundo1 = 0
     segundo2 = 0
     minutos1 = 0
     minutos2 = 0
     document.getElementById("1").textContent = 0
     document.getElementById("2").textContent = 0
     document.getElementById("3").textContent = 0
     document.getElementById("4").textContent = 0
}

function pause() {
    clearInterval(intervalo)
    rodando = false
}


