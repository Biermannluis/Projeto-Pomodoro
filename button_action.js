function star(){
   start_seg(), start_min(),start_hor() 
}
function pause(){
    stop_seg(), stop_min(), stop_hor()
    pause_hor_chill()
}
function stop(){
    pause_seg(), pause_min(), pause_hor()
    stop_hor_chill()
}