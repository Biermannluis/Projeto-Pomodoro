interval_seg = 0;
var seg = 0
var min = 0
var hor = 0
var idtimer = document.getElementById('idtimer')
var seg_chill = 0
var min_chill = 0
var hor_chill = 0

function start() {
    clearInterval(interval_seg)
    interval_seg = setInterval(cont_seg, 100)
}

function pause_seg() {
    clearInterval(interval_seg);
}

function stop_seg() {
    clearInterval(interval_seg);
    document.getElementById('div_seg').innerHTML = "00"
    seg = 0
    min = 0
    hor = 0
}

function cont_seg() {
    if (min < set_work_time) {
        seg++
        idtimer.style.color = 'red';
    }

    if (seg <= 9) {
        document.getElementById('div_seg').innerHTML = "0" + seg
    }
    else {
        document.getElementById('div_seg').innerHTML = seg
    }

    if (seg == 60) {
        min++
        seg = 0
        if (min <= 9) {
            document.getElementById('div_min').innerHTML = "0" + min
        }
        else {
            document.getElementById('div_min').innerHTML = min
        }
    }
    if (min == 6) {
        hor++
        min = 0
        if (hor <= 9) {
            document.getElementById('div_hor').innerHTML = "0" + hor
        }
        else {
            document.getElementById('div_hor').innerHTML = hor
        }
    }
    //=======================CHILL===============================================
    if (min_chill < set_chill_time & min>=set_work_time) {
        seg_chill++
        idtimer.style.color = 'blue';
    }else{
        seg=0
        min=0
        hor=0
        seg_chill=0
        min_chill=0
        hor_chill=0    
    }


    if (seg_chill <= 9) {
        document.getElementById('div_seg').innerHTML = "0" + seg_chill
    }
    else {
        document.getElementById('div_seg').innerHTML = seg_chill
    }

    if (seg_chill == 60) {
        min_chilln++
        seg_chillg = 0
        if (min_chilln <= 9) {
            document.getElementById('div_min').innerHTML = "0" + min_chill
        }
        else {
            document.getElementById('div_min').innerHTML = min_chill
        }
    }
    if (min_chill == 6) {
        hor_chill++
        min_chill = 0
        if (hor_chill <= 9) {
            document.getElementById('div_hor').innerHTML = "0" + hor_chill
        }
        else {
            document.getElementById('div_hor').innerHTML = hor_chill
        }
    }
}