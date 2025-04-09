const hour = document.getElementById('hour')
const minute = document.getElementById('minute')
const second = document.getElementById('second')
const displayTime = document.getElementById('displayTime')
const day = document.getElementById('day')

// get Time 

setInterval(() => {

const date = new Date();
const hoursTime = date.getHours()%12 || 12;
const minuteTime = date.getMinutes().toString().padStart(2,'0');
const secondTime = date.getSeconds().toString().padStart(2,'0');
const ampm = date.getHours()>= 12 ? 'PM' :'AM';
const options ={
    weekday:'long',
    year:'numeric',
    month:'long',
    day:'numeric'
}
    const hourRotation = 30 * hoursTime + minuteTime / 2;
    const minuteRotation = 6 * minuteTime;
    const SecondRotation = 6 * secondTime;
    hour.style.transform = `rotate(${hourRotation}deg)`
    minute.style.transform = `rotate(${minuteRotation}deg)`
    second.style.transform = `rotate(${SecondRotation}deg)`
    displayTime.innerText = `${hoursTime}:${minuteTime}:${secondTime} ${ampm}`
    day.innerText=date.toLocaleDateString(undefined,options)
}, 1000)