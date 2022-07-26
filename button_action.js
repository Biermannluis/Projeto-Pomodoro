function start(){
    console.log('start')
   start_seg(), start_min(),start_hor() 
}
function pause(){
    pause_seg(), pause_min(), pause_hor()
    pause_seg_chill()
    pause_min_chill()
    pause_hor_chill()
}
function stop(){
    stop_seg(), stop_min(), stop_hor()
    stop_seg_chill()
    stop_min_chill()
    stop_hor_chill()
}
work_time = document.getElementById('work_time')
chill_time = document.getElementById('chill_time')
var set_work_time;
var set_chill_time;

function set_time() {
    set_work_time = work_time.value
    set_chill_time = chill_time.value
    console.log('A variavel auxiliar de set work time tem valor:',set_work_time)
    console.log('A variavel auxiliar de set chill time tem valor:',set_chill_time)
}
