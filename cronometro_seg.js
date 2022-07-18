interval_seg=0;
var seg=0
function start_seg() {
    clearInterval(interval_seg)
    interval_seg = setInterval(cont_seg, 100)
}

function pause_seg() {
    clearInterval(interval_seg);
}

function stop_seg() {
    clearInterval(interval_seg);
    document.getElementById('div_seg').innerHTML ="00"
    seg=0
}

function cont_seg() {
    seg++
        if (seg <= 9) {
        document.getElementById('div_seg').innerHTML = "0" + seg
    }
    else {
        document.getElementById('div_seg').innerHTML = seg
    }
    if (seg == 60) {
        seg = 0
    }
}