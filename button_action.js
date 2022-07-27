
function pause(){
    pause_seg()
    
}
function stop(){
    stop_seg()
    
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
