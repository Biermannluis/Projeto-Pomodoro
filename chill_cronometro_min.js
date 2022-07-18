interval_min_chill = 0
var min_chill = 0

function start_min_chill() {
    clearInterval(interval_min_chill)
    interval_min_chill = setInterval(cont_min_chill, 600)
    console.log('inicia chill cronometro min')
    console.log('tempo setado de cill:',set_chill_time)
}

function pause_min_chill() {
    clearInterval(interval_min_chill);
}

function stop_min_chill() {
    clearInterval(interval_min_chill);
    document.getElementById('div_min').innerHTML = "00"
    min_chill = 0
}

function cont_min_chill() {
    min_chill++
    if (min_chill <= 9) {
        div_min.innerHTML = "0" + min_chill
    }
    else {
        document.getElementById('div_min').innerHTML = min_chill
    }
    if (min_chill == 60) {
        min_chill = 0
    }
    if (min_chill == set_chill_time) {
        console.log('tempo de min chill se iguala ao set chill')
        clearInterval(interval_seg_chill);
        document.getElementById('div_seg').innerHTML = "00"
        clearInterval(interval_min);
        document.getElementById('div_min').innerHTML = "00"
        clearInterval(interval_hor);
        document.getElementById('div_hor').innerHTML = "00"

        start_seg()
        start_min()
        start_hor()
    }
}
