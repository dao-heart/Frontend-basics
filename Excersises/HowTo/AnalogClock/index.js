const hrsHand = document.getElementById('hour');
const minHand = document.getElementById('minute');
const secHand = document.getElementById('second');

function processSec(date){
    let milliseconds = date.getMilliseconds();
    let secs = date.getSeconds() + (milliseconds/1000);
    return 6 * secs;
}

function processMin(date){
    let minutes = date.getMinutes();
    return 6 * minutes;
}

function processHrs(date){
    let hrs = date.getHours();
    console.log(hrs)
    switch(hrs){
        case hrs === 0 || hrs === 12:
            return 0;
        case hrs > 12:
            return 15*(hrs-12);
        default:
        case hrs < 12:
            return hrs * 15;
             
    }
}

function clock(){

    function getTime(){

        let date = new Date();
        let secDeg = processSec(date);
        let minDeg = processMin(date);
        let hrsDeg = processHrs(date);
        secHand.style.transform= `rotate(${90 + secDeg}deg)`;
        minHand.style.transform= `rotate(${90 + minDeg}deg)`;
        hrsHand.style.transform= `rotate(${90 + hrsDeg}deg)`;
    }

    setInterval(()=>{getTime()}, 500)

    



}


clock();











