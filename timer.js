export function Timer({seconds1, seconds2, minutes1, minutes2, interval, running,}){

    function init() {
    if(! running) {
     interval = setInterval(() => {
        
        seconds1++
        if(seconds1 >= 10) {
            seconds1 = 0
            seconds2++
        }
    
        if(seconds2 >= 6 ) {
            minutes1++
            seconds2 = 0
        }
    
        if( minutes1 >= 10){
            minutes2++
            minutes1 = 0
        }
    
        
        document.getElementById("1").textContent = minutes2
        document.getElementById("2").textContent = minutes1
        document.getElementById("3").textContent = seconds2
        document.getElementById("4").textContent = seconds1
        document.title = `${minutes2}${minutes1}:${seconds2}${seconds1}`
        
    
        console.log(minutes2, minutes1, seconds2, seconds1)
        
        
        }, 1000);
    }
    running = true
}

    function stop() {
        clearInterval(interval)
        running = false
        seconds1 = 0
        seconds2 = 0
        minutes1 = 0
        minutes2 = 0
        document.getElementById("1").textContent = 0
        document.getElementById("2").textContent = 0
        document.getElementById("3").textContent = 0
        document.getElementById("4").textContent = 0
    }

    function pause() {
        clearInterval(interval)
        running = false
    }

    return {pause,stop,init,}

}

