interval_min_chill = 0
min_chill = 0
var idtimer = document.getElementById('idtimer')

function start_min_chill() {
    console.log(min_chill)
    console.log('min_chill == set_chill_time')
    console.log('tempo setado de chill:')
    idtimer.style.color = 'red';

    clearInterval(interval_min_chill)
    interval_min_chill = setInterval(cont_min_chill, 6000)
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
    if (set_chill_time > min_chill) {
        console.log('Contador min chill:', min_chill)
        min_chill++
        if (min_chill <= 9) {
            document.getElementById('div_min').innerHTML = "0" + min_chill
        }
        else {
            document.getElementById('div_min').innerHTML = min_chill
        }
        if (min_chill == 60) {
            min_chill = 0
        }
    }

    if (min_chill == set_chill_time) {
        console.log('min_chill == set_chill_time')
        clearInterval(interval_seg_chill);
        document.getElementById('div_seg').innerHTML = "00"
        clearInterval(interval_min);
        document.getElementById('div_min').innerHTML = "00"
        clearInterval(interval_hor);
        document.getElementById('div_hor').innerHTML = "00"
        min_chill = 0
        console.log('min_chill:', min_chill)

        start()
    }
}