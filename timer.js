export function Timer({secondsUnit, secondsTen, minutesUnit, minutesTen, interval}){

    function init() {
     interval = setInterval(() => {
        secondsUnit++
        if(secondsUnit >= 10) {
            secondsUnit = 0
            secondsTen++
        }
    
        if(secondsTen >= 6 ) {
            minutesUnit++
            secondsTen = 0
        }
    
        if( minutesUnit >= 10){
            minutesTen++
            minutesUnit = 0
        }
        updateDisplay(minutesUnit, minutesTen, secondsUnit, secondsTen)
        }, 1000);
}


    function updateDisplay(minutesUnit, minutesTen, secondsUnit, secondsTen) {
        document.getElementById("1").textContent = minutesTen
        document.getElementById("2").textContent = minutesUnit
        document.getElementById("3").textContent = secondsTen
        document.getElementById("4").textContent = secondsUnit
        document.title = `${minutesTen}${minutesUnit}:${secondsTen}${secondsUnit}`
    }

    function stop() {
        pause()
        secondsUnit = 0
        secondsTen = 0
        minutesUnit = 0
        minutesTen = 0
        updateDisplay(minutesUnit, minutesTen, secondsUnit, secondsTen)
    }

    function pause() {
        clearInterval(interval)
    }

    return {pause, stop, init}

}

