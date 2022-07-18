var min = 0
var hor = 0
var interval;


function watch() {
    seg++
    if (seg <= 9) {
        document.getElementById('seg').innerHTML = "0" + seg
    }
    else {
        document.getElementById('seg').innerHTML = seg
    }
    if (seg == 60) {
        seg = 0
        min++
        if (min <= 9) {
            document.getElementById('min').innerHTML = "0" + min
        }
        else {
            document.getElementById('min').innerHTML = min
        }
    }
    if (min == 60) {
        min = 0
        hor++
        if (hor <= 9) {
            document.getElementById('hor').innerHTML = "0" + hor
        }
        else {
            document.getElementById('hor').innerHTML = hor
        }
    }

}