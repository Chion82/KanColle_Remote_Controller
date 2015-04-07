function secondsTimeSpanToHMS(s) {
    var h = Math.floor(s/3600); //Get whole hours
    s -= h*3600;
    var m = Math.floor(s/60); //Get remaining minutes
    s -= m*60;
    s = parseInt(s);
    return h+":"+(m < 10 ? '0'+ m : m)+":"+(s < 10 ? '0'+ s : s); //zero padding on minutes and seconds
}
