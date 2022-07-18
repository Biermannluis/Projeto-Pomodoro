var hor_chill = 0
var interval_hor_chill;
function start_hor_chill() {
    console.log('inicia chill cronometro hor')

    clearInterval(interval_hor_chill)
    interval_hor_chill = setInterval(cont_hor_chill, 360)
}
function pause_hor_chill() {
    clearInterval(interval_hor_chill);


}
function stop_hor_chill() {
    clearInterval(interval_hor_chill);
     
    hor_chill = "00"
    document.getElementById('div_hor').innerHTML = hor_chill
}
function cont_hor_chill() {
    hor_chill++
    if (hor_chill<= 9) {
        document.getElementById('div_hor').innerHTML = "0" + hor_chill
    }
    else {
        document.getElementById('div_hor').innerHTML = hor_chill
    }
    
}