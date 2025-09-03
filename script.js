const secondHand=document.querySelector(".second-hand")
const minuteHand=document.querySelector(".minute-hand")
const hourHand=document.querySelector(".hour-hand")

let timeSeconds=0;
function setTime(){
    const date = new Date()
    const seconds=date.getSeconds()
    const mins=date.getMinutes()
    const hours=date.getHours()
    // 450->90

    ++timeSeconds;

    // 1 rotation=360 deg
    // 60 second=1 rotation
    // 1 second = 6 degree
    const secondDegree=timeSeconds*6+90
    secondHand.style.transform=`rotate(${secondDegree}deg)`

    // 1 minute=60 second
    // 1/60 minute=1 second
    // 6 degree in seconds= 0.1 degree in minutes
    const minuteDegree=mins*6+timeSeconds*0.1+90
    minuteHand.style.transform=`rotate(${minuteDegree}deg)`

    // 1 hour=60min
    // 30 degree = 60 * 6
    // 6 degree=> 1 minute=> 0.5 degree of hour hand
    // 0.5 degree=6 degree
    // We know 0.1 degree minute-> 6 degree second
    // 0.5 degree hour=360 degree second
    // 0.5/60 degree =6 degree second
    const hourDegree=hours*30+0.5/60*timeSeconds+90;
    hourHand.style.transform=`rotate(${hourDegree}deg)`
    console.log(hours,mins,seconds);
        
}

setInterval(setTime,1000)