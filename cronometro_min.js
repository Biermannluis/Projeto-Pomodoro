interval_min = 0
var min = 0

function start_min() {
    clearInterval(interval_min)
    interval_min = setInterval(cont_min, 6000)
    console.log('Inicia programa com tempo work set:',set_work_time)
    console.log('Inicia programa com tempo chill set:',set_chill_time)
}

function pause_min() {
    clearInterval(interval_min);
}

function stop_min() {
    clearInterval(interval_min);
    document.getElementById('div_min').innerHTML = "00"
    min = 0
}

function cont_min() {
    min++
    if (min <= 9) {
        div_min.innerHTML = "0" + min
    }
    else {
        document.getElementById('div_min').innerHTML = min
    }
    if (min == 60) {
        min = 0
    }
    if (min == set_work_time) {
        clearInterval(interval_seg);
        document.getElementById('div_seg').innerHTML = "00"
        clearInterval(interval_min);
        document.getElementById('div_min').innerHTML = "00"
        clearInterval(interval_hor);
        document.getElementById('div_hor').innerHTML = "00"

        start_seg_chill()
        start_min_chill()
        start_hor_chill()

    }
}
