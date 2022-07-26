
interval_seg_chill=0;
var seg_chill=0
function start_seg_chill() {
    console.log('inicia chill seg')
    clearInterval(interval_seg_chill)
    interval_seg_chill = setInterval(cont_seg_chill, 100)
}

function pause_seg_chill() {
    clearInterval(interval_seg_chill);
}

function stop_seg_chill() {
    clearInterval(interval_seg_chill);
    document.getElementById('div_seg').innerHTML ="00"
    seg_chill=0
}

function cont_seg_chill() {
    seg_chill++
    console.log('Contador seg_chill',seg_chill)
        if (seg_chill <= 9) {
        document.getElementById('div_seg').innerHTML = "0" + seg_chill
    }
    else {
        document.getElementById('div_seg').innerHTML = seg_chill
    }
    if (seg_chill == 60) {
        seg_chill = 0
    }
}