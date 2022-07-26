var hor = 0
var interval_hor;
function start_hor() {
    clearInterval(interval_hor)
    interval_hor = setInterval(cont_hor, 36000)
}
function pause_hor() {
    clearInterval(interval_hor);


}
function stop_hor() {
    clearInterval(interval_hor);
     
    hor = "00"
    document.getElementById('div_hor').innerHTML = hor
}
function cont_hor() {
    hor++
    if (hor<= 9) {
        document.getElementById('div_hor').innerHTML = "0" + hor
    }
    else {
        document.getElementById('div_hor').innerHTML = hor
    }
    
}